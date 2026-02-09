import { useNavigator } from "@shared/router/hooks/navigator";
import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { PlatformFormData } from "@features/platform/types/form";
import type { NewPlatform } from "@features/platform/types/platform";
import { useSession } from "@features/auth/hooks/session";
import { createPlatform } from "@features/platform/utils/api";
import { PlatformForm } from "@features/platform/components/platform-form";

export function PlatformCreateFormPage() {
    useApplicationHeader(
        "Create Platform",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/platform/list");
                }
            },
        ]
    );

    const { session } = useSession();
    const navigate = useNavigator();

    const handleSubmit = (data: PlatformFormData) => {
        const newPlatform: NewPlatform = {
            name: data.name,
            abbreviation: data.abbreviation,
            type: data.type,
            developer: data.developer,
            manufacturer: data.manufacturer,
            description: data.description
        };

        createPlatform(session!, newPlatform)
            .then(() => {
                navigate.to("/app/platform/list");
            })
            .catch((error: Error) => {
                console.error("Failed to create platform:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/platform/list");
    };

    return (
        <PlatformForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
