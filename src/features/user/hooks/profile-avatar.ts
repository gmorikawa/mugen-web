import { useEffect, useState } from "react";

import type { ID } from "@shared/entity/types/id";

import type { BinaryFile } from "@features/file/types/binary-file";
import { useSession } from "@features/auth/hooks/session";
import { downloadUserAvatar } from "@features/user/utils/api";
import { NoSessionError } from "@features/auth/errors/no-session-error";

export interface ProfileAvatarController {
    link: string;

    updateWithBinary(file: BinaryFile): void;
    reset(): void;
}

export function useProfileAvatar(userId: ID): ProfileAvatarController {
    const [link, setLink] = useState<string>("");
    const { session } = useSession();

    if (!session) {
        throw new NoSessionError();
    }

    const updateWithBinary = (file: BinaryFile) => {
        const url = URL.createObjectURL(file);
        setLink((previousLink: string) => {
            URL.revokeObjectURL(previousLink);
            return url;
        });
    };

    const reset = () => {
        setLink((previousLink: string) => {
            URL.revokeObjectURL(previousLink);
            return "";
        });
    };

    useEffect(() => {
        const abortController = new AbortController();

        downloadUserAvatar(session, userId, abortController.signal)
            .then((blob: Blob) => {
                const url = URL.createObjectURL(blob);
                setLink(url);
            })
            .catch((_: Error) => {
            });

        return () => {
            abortController.abort();
            reset();
        };
    }, []);
    return {
        link,
        updateWithBinary,
        reset,
    };
}