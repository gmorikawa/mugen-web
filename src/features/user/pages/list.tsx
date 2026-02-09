import { useEffect, useState } from "react";

import { useApplicationHeader } from "@shared/application/hooks/application-header";
import { useNavigator } from "@shared/router/hooks/navigator";

import { Button } from "@components/button/button";
import { Container } from "@components/container/container";

import type { User } from "@features/user/types/user";
import { useSession } from "@features/auth/hooks/session";
import { deleteUser, getUsers } from "@features/user/utils/api";
import { UserCard } from "@features/user/components/user-card";

export function UserListPage() {
    useApplicationHeader(
        "User List",
        [
            { label: "New", action: () => { navigate.to("/app/user/form"); } },
        ]
    );

    const [users, setUsers] = useState<User[]>([]);
    const { session } = useSession();
    const navigate = useNavigator();

    if (!session) {
        throw new Error("No session found");
    }

    const handleUpdate = (user: User) => {
        navigate.to(`/app/user/form/${user.id}`);
    };

    const refresh = async (): Promise<void> => {
        return getUsers(session)
            .then((fetchedUsers: User[]) => {
                setUsers(fetchedUsers);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDelete = (user: User) => {
        deleteUser(session, user.id)
            .then(() => {
                return refresh();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        refresh();
    }, []);
    return users.map((user: User) => (
        <UserCard
            key={user.id}
            user={user}
            actionSlot={(
                <Container
                    style={{
                        display: "flex",
                        gap: "8px",
                    }}
                >
                    <Button onClick={() => handleUpdate(user)} color="primary" variant="outlined">Edit</Button>
                    <Button onClick={() => handleDelete(user)} color="danger" variant="outlined">Delete</Button>
                </Container>
            )}
        />
    ));
}