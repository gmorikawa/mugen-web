import { Environment } from "@config/environment";

import type { ID } from "@shared/entity/types/id";

import type { Session } from "@features/auth/types/session";
import type { Platform, NewPlatform } from "@features/platform/types/platform";

export async function getPlatforms(
    session: Session
): Promise<Platform[]> {
    const response = await fetch(Environment.API_URL.concat("/platforms"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.token}`,
            "Accept": "application/json"
        },
    });

    if (!response.ok) {
        throw new Error("Get platforms request failed");
    }

    return response.json();
}

export async function getPlatformById(
    session: Session,
    id: ID
): Promise<Platform> {
    const response = await fetch(
        Environment.API_URL.concat(`/platforms/${id}`),
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
        throw new Error("Get platform by ID request failed");
    }

    return response.json();
}

export async function createPlatform(
    session: Session,
    platform: NewPlatform,
) {
    const response = await fetch(
        Environment.API_URL.concat("/platforms"),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(platform),
        }
    );

    if (!response.ok) {
        throw new Error("Create platform request failed");
    }

    return response.json();
}

export async function updatePlatform(
    session: Session,
    id: ID,
    platform: Platform,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/platforms/${id}`),
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(platform),
        }
    );

    if (!response.ok) {
        throw new Error("Update platform request failed");
    }

    return response.json();
}

export async function deletePlatform(
    session: Session,
    id: ID,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/platforms/${id}`),
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
        throw new Error("Delete platform request failed");
    }

    return response.json();
}
