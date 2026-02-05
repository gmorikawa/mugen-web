import { Environment } from "@config/environment";

import type { Session } from "@features/auth/types/session";
import type { User } from "@features/user/types/user";

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
