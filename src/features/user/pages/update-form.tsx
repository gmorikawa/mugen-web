import { useEffect, useState } from "react";

import type { ID } from "@shared/entity/types/id";
import { useParams } from "@shared/router/hooks/params";

import type { User } from "@features/user/types/user";
import { useSession } from "@features/auth/hooks/session";
import { getUserById, updateUser } from "@features/user/utils/api";
import { UserForm } from "@features/user/components/user-form";
import { useNavigator } from "@shared/router/hooks/navigator";

type ParamsWithId = {
    id: ID;
};

export function UserUpdateFormPage() {
    const { id } = useParams<ParamsWithId>();
    const { session } = useSession();
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigator();

    const handleSubmit = (data: User) => {
        updateUser(session!, id, data)
            .then((_: User) => {
                navigate.to("/app/user/list");
            })
            .catch((error: Error) => {
                console.error("Failed to update user:", error);
            });
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
        <UserForm
            user={user}
            onSubmit={handleSubmit}
        />
    );
}
