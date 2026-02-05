import { useEffect, useState } from "react";

import type { User } from "@features/user/types/user";
import { useSession } from "@features/auth/hooks/session";
import { getUsers } from "@features/user/utils/api";

export function UserListPage() {
    const [users, setUsers] = useState<User[]>([]);
    const { session } = useSession();

    if (!session) {
        throw new Error("No session found");
    }

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
    return users.map((user) => (
        <div key={user.id}>
            {user.id} - {user.username} - {user.email}
        </div>
    ));
}