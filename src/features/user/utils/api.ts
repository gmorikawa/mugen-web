import { Environment } from "@config/environment";

import type { ID } from "@shared/entity/types/id";

import type { Session } from "@features/auth/types/session";
import type { BinaryFile } from "@features/file/types/binary-file";
import type { User } from "@features/user/types/user";
import type { CreateUserDTO, UpdateUserDTO } from "../types/dto";

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

export async function createUser(
    session: Session,
    user: CreateUserDTO
): Promise<User> {
    const response = await fetch(
        Environment.API_URL.concat("/users"),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if (!response.ok) {
        throw new Error("Create user request failed");
    }

    return response.json();
}

export async function updateUser(
    session: Session,
    id: ID,
    user: UpdateUserDTO
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

export async function downloadUserAvatar(
    session: Session,
    id: ID,
    abort?: AbortSignal
): Promise<Blob> {

    const response = await fetch(
        Environment.API_URL.concat(`/users/${id}/profile/avatar`),
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${session.token}`,
            },
            signal: abort,
        }
    );

    if (!response.ok) {
        throw new Error("Download user avatar request failed");
    }

    return response.blob();
}

export async function uploadUserAvatar(
    session: Session,
    id: ID,
    file: BinaryFile
): Promise<boolean> {
    const formData = new FormData();
    formData.append("avatar", file);

    const response = await fetch(
        Environment.API_URL.concat(`/users/${id}/profile/avatar`),
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${session.token}`,
                "Accept": "application/json"
            },
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("Upload user avatar request failed");
    }

    const { success } = await response.json();
    return success;
}
