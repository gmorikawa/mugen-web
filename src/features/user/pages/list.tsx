import { useEffect, useState } from "react";

import type { User } from "@features/user/types/user";
import { useSession } from "@features/auth/hooks/session";
import { getUsers } from "@features/user/utils/api";
import { UserCard } from "../components/user-card";
import { Button } from "@components/button/button";
import { Container } from "@components/container/container";
import { useNavigator } from "@shared/router/hooks/navigator";

export function UserListPage() {
    const [users, setUsers] = useState<User[]>([]);
    const { session } = useSession();
    const navigate = useNavigator();

    if (!session) {
        throw new Error("No session found");
    }

    const handleUpdate = (user: User) => {
        navigate.to(`/app/user/form/${user.id}`);
    };

    useEffect(() => {
        getUsers(session)
            .then((fetchedUsers: User[]) => {
                setUsers(fetchedUsers);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
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
                    <Button onClick={() => {}} color="danger" variant="outlined">Delete</Button>
                </Container>
            )}
        />
    ));
}