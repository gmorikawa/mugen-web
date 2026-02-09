import { Environment } from "@config/environment";

import type { ID } from "@shared/entity/types/id";

import type { Session } from "@features/auth/types/session";
import type { Category, NewCategory } from "@features/category/types/category";

export async function getCategories(
    session: Session
): Promise<Category[]> {
    const response = await fetch(Environment.API_URL.concat("/categories"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.token}`,
            "Accept": "application/json"
        },
    });

    if (!response.ok) {
        throw new Error("Get categories request failed");
    }

    return response.json();
}

export async function getCategoryById(
    session: Session,
    id: ID
): Promise<Category> {
    const response = await fetch(
        Environment.API_URL.concat(`/categories/${id}`),
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
        throw new Error("Get category by ID request failed");
    }

    return response.json();
}

export async function createCategory(
    session: Session,
    category: NewCategory,
) {
    const response = await fetch(
        Environment.API_URL.concat("/categories"),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(category),
        }
    );

    if (!response.ok) {
        throw new Error("Create category request failed");
    }

    return response.json();
}

export async function updateCategory(
    session: Session,
    id: ID,
    category: Category,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/categories/${id}`),
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(category),
        }
    );

    if (!response.ok) {
        throw new Error("Update category request failed");
    }

    return response.json();
}

export async function deleteCategory(
    session: Session,
    id: ID,
) {
    const response = await fetch(
        Environment.API_URL.concat(`/categories/${id}`),
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
        throw new Error("Delete category request failed");
    }

    return response.json();
}
