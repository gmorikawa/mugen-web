import { Environment } from "@config/environment";

import type { Session } from "@features/auth/types/session";
import type { User } from "@features/user/types/user";
import type { ID } from "@shared/entity/types/id";

export async function getUsers(
    session: Session
): Promise<User[]> {
    const response = await fetch(Environment.API_URL.concat("/users"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.token}`,
            "Accept": "application/json"
        },
    });

    if (!response.ok) {
        throw new Error("Get users request failed");
    }

    return response.json();
}

export async function getUserById(
    session: Session,
    id: ID
): Promise<User> {
    const response = await fetch(Environment.API_URL.concat(`/users/${id}`), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.token}`,
            "Accept": "application/json"
        },
    });

    if (!response.ok) {
        throw new Error("Get users request failed");
    }

    return response.json();
}


export async function updateUser(
    session: Session,
    id: ID,
    user: User
): Promise<User> {
    const response = await fetch(
        Environment.API_URL.concat(`/users/${id}`),
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if (!response.ok) {
        throw new Error("Update user request failed");
    }

    return response.json();
}
