import { Environment } from "@config/environment";

import type { ID } from "@shared/entity/types/id";

import type { Session } from "@features/auth/types/session";
import type { Language, NewLanguage } from "@features/language/types/language";

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

export async function getLanguageById(
    session: Session,
    id: ID
): Promise<Language> {
    const response = await fetch(
        Environment.API_URL.concat(`/languages/${id}`),
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
        }
    );

    if (!response.ok) {
        throw new Error("Get language by ID request failed");
    }

    return response.json();
}

export async function createLanguage(
    session: Session,
    language: NewLanguage,
) {
    const response = await fetch(
        Environment.API_URL.concat("/languages"),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(language),
        }
    );

    if (!response.ok) {
        throw new Error("Create language request failed");
    }

    return response.json();
}

export async function updateLanguage(
    session: Session,
    id: ID,
    language: Language,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/languages/${id}`),
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(language),
        }
    );

    if (!response.ok) {
        throw new Error("Update language request failed");
    }

    return response.json();
}

export async function deleteLanguage(
    session: Session,
    id: ID,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/languages/${id}`),
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
        }
    );

    if (!response.ok) {
        throw new Error("Delete language request failed");
    }

    return response.json();
}
