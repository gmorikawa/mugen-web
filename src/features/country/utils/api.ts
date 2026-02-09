import { Environment } from "@config/environment";

import type { ID } from "@shared/entity/types/id";

import type { Session } from "@features/auth/types/session";
import type { Country, NewCountry } from "@features/country/types/country";

export async function getCountries(
    session: Session
): Promise<Country[]> {
    const response = await fetch(Environment.API_URL.concat("/countries"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.token}`,
            "Accept": "application/json"
        },
    });

    if (!response.ok) {
        throw new Error("Get countries request failed");
    }

    return response.json();
}

export async function getCountryById(
    session: Session,
    id: ID
): Promise<Country> {
    const response = await fetch(
        Environment.API_URL.concat(`/countries/${id}`),
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
        throw new Error("Get country by ID request failed");
    }

    return response.json();
}

export async function createCountry(
    session: Session,
    country: NewCountry,
) {
    const response = await fetch(
        Environment.API_URL.concat("/countries"),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(country),
        }
    );

    if (!response.ok) {
        throw new Error("Create country request failed");
    }

    return response.json();
}

export async function updateCountry(
    session: Session,
    id: ID,
    country: Country,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/countries/${id}`),
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(country),
        }
    );

    if (!response.ok) {
        throw new Error("Update country request failed");
    }

    return response.json();
}

export async function deleteCountry(
    session: Session,
    id: ID,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/countries/${id}`),
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
        throw new Error("Delete country request failed");
    }

    return response.json();
}
