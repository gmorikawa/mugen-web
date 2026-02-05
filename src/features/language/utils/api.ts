import { Environment } from "@config/environment";

import type { Session } from "@features/auth/types/session";
import type { Language } from "@features/language/types/language";

export async function getLanguages(
    session: Session
): Promise<Language[]> {
    const response = await fetch(Environment.API_URL.concat("/languages"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.token}`,
            "Accept": "application/json"
        },
    });

    if (!response.ok) {
        throw new Error("Get languages request failed");
    }

    return response.json();
}
