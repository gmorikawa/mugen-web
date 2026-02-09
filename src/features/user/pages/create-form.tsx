import { useApplicationHeader } from "@shared/application/hooks/application-header";
import { useNavigator } from "@shared/router/hooks/navigator";

import type { CreateUserData } from "@features/user/types/create-user-data";
import type { CreateUserDTO } from "@features/user/types/dto";
import { useSession } from "@features/auth/hooks/session";
import { createUser } from "@features/user/utils/api";
import { UserCreateForm } from "@features/user/components/user-create-form";

export function UserCreateFormPage() {
    useApplicationHeader(
        "Create User",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/user/list");
                }
            },
        ]
    );

    const { session } = useSession();
    const navigate = useNavigator();

    const handleSubmit = (data: CreateUserData) => {
        const newUser: CreateUserDTO = {
            email: data.email,
            username: data.username,
            role: data.role,
            password: data.password
        };

        createUser(session!, newUser)
            .then(() => {
                navigate.to("/app/user/list");
            })
            .catch((error: Error) => {
                console.error("Failed to create user:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/user/list");
    };

    return (
        <UserCreateForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
