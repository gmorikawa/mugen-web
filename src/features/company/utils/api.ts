import { Environment } from "@config/environment";

import type { ID } from "@shared/entity/types/id";

import type { Session } from "@features/auth/types/session";
import type { Company, NewCompany } from "@features/company/types/company";

export async function getCompanies(
    session: Session
): Promise<Company[]> {
    const response = await fetch(Environment.API_URL.concat("/companies"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.token}`,
            "Accept": "application/json"
        },
    });

    if (!response.ok) {
        throw new Error("Get companies request failed");
    }

    return response.json();
}

export async function getCompanyById(
    session: Session,
    id: ID
): Promise<Company> {
    const response = await fetch(
        Environment.API_URL.concat(`/companies/${id}`),
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
        throw new Error("Get company by ID request failed");
    }

    return response.json();
}

export async function createCompany(
    session: Session,
    company: NewCompany,
) {
    const response = await fetch(
        Environment.API_URL.concat("/companies"),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(company),
        }
    );

    if (!response.ok) {
        throw new Error("Create company request failed");
    }

    return response.json();
}

export async function updateCompany(
    session: Session,
    id: ID,
    company: Company,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/companies/${id}`),
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(company),
        }
    );

    if (!response.ok) {
        throw new Error("Update company request failed");
    }

    return response.json();
}

export async function deleteCompany(
    session: Session,
    id: ID,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/companies/${id}`),
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
        throw new Error("Delete company request failed");
    }

    return response.json();
}
