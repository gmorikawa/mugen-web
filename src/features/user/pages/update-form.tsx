import { useEffect, useState } from "react";

import type { ID } from "@shared/entity/types/id";
import { useParams } from "@shared/router/hooks/params";

import type { User } from "@features/user/types/user";
import type { UpdateUserDTO } from "@features/user/types/dto";
import type { BinaryFile } from "@features/file/types/binary-file";
import { useSession } from "@features/auth/hooks/session";
import { useNavigator } from "@shared/router/hooks/navigator";
import { useProfileAvatar } from "@features/user/hooks/profile-avatar";
import { getUserById, updateUser, uploadUserAvatar } from "@features/user/utils/api";
import { UserForm } from "@features/user/components/user-form";

type ParamsWithId = {
    id: ID;
};

export function UserUpdateFormPage() {
    const { id } = useParams<ParamsWithId>();
    const { session } = useSession();
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigator();

    const [avatarBinary, setAvatarBinary] = useState<BinaryFile | null>(null);

    const profileAvatar = useProfileAvatar(id);

    const handleSubmit = (data: UpdateUserDTO) => {
        const editedUser: User = {
            id: id,
            email: data.email,
            username: data.username,
            role: data.role,
            profile: data.profile
        };

        updateUser(session!, id, editedUser)
            .then((_: User): Promise<boolean> => {
                return (avatarBinary)
                    ? uploadUserAvatar(session!, id, avatarBinary)
                    : Promise.resolve(true);
            })
            .then(() => {
                navigate.to("/app/user/list");
            })
            .catch((error: Error) => {
                console.error("Failed to update user:", error);
            });
    };

    const handleChangeAvatar = (file: BinaryFile | null) => {
        if (file) {
            profileAvatar.updateWithBinary(file);
            setAvatarBinary(file);
        } else {
            profileAvatar.reset();
            setAvatarBinary(null);
        }
    };

    useEffect(() => {
        getUserById(session!, id)
            .then((user: User) => {
                setUser(user);
            })
            .catch((error: Error) => {
                console.error("Failed to fetch user:", error);
            });
    }, []);
    return user && (
        <UserForm<UpdateUserDTO>
            user={user}
            avatarUrl={profileAvatar?.link}
            onChangeAvatar={handleChangeAvatar}
            onSubmit={handleSubmit}
        />
    );
}
