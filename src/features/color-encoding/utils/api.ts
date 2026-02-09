import { Environment } from "@config/environment";

import type { ID } from "@shared/entity/types/id";

import type { Session } from "@features/auth/types/session";
import type { ColorEncoding, NewColorEncoding } from "@features/color-encoding/types/color-encoding";

export async function getColorEncodings(
    session: Session
): Promise<ColorEncoding[]> {
    const response = await fetch(Environment.API_URL.concat("/color-encodings"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.token}`,
            "Accept": "application/json"
        },
    });

    if (!response.ok) {
        throw new Error("Get color encodings request failed");
    }

    return response.json();
}

export async function getColorEncodingById(
    session: Session,
    id: ID
): Promise<ColorEncoding> {
    const response = await fetch(
        Environment.API_URL.concat(`/color-encodings/${id}`),
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
        throw new Error("Get color encoding by ID request failed");
    }

    return response.json();
}

export async function createColorEncoding(
    session: Session,
    colorEncoding: NewColorEncoding,
) {
    const response = await fetch(
        Environment.API_URL.concat("/color-encodings"),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(colorEncoding),
        }
    );

    if (!response.ok) {
        throw new Error("Create color encoding request failed");
    }

    return response.json();
}

export async function updateColorEncoding(
    session: Session,
    id: ID,
    colorEncoding: ColorEncoding,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/color-encodings/${id}`),
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(colorEncoding),
        }
    );

    if (!response.ok) {
        throw new Error("Update color encoding request failed");
    }

    return response.json();
}

export async function deleteColorEncoding(
    session: Session,
    id: ID,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/color-encodings/${id}`),
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
        throw new Error("Delete color encoding request failed");
    }

    return response.json();
}
