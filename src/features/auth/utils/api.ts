import { Environment } from "@config/environment";

import type { Session } from "@features/auth/types/session";
import type { Token } from "@features/auth/types/token";

export async function systemSetup(
    email: string,
    username: string,
    password: string
): Promise<void> {
    const response = await fetch(Environment.API_URL.concat("/auth/system-setup"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ email, username, password }),
    });

    if (!response.ok) {
        throw new Error("System setup request failed");
    }
}

export async function login(
    username: string,
    password: string
): Promise<Session> {
    const response = await fetch(Environment.API_URL.concat("/auth/login"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Wrong username and/or password");
    }

    const session = await response.json();

    const token = session["token"];
    const loggedUser = session["loggedUser"];

    if (!token || token === "") {
        throw new Error("Login Request error: No token received from server");
    }

    if (!loggedUser || Object.keys(loggedUser).length === 0) {
        throw new Error("Login Request error: Invalid user data received from server");
    }

    return {
        token: session["token"],
        loggedUser: session["loggedUser"],
    };
}

export async function confirmEmail(
    token: Token
): Promise<boolean> {
    const response = await fetch(Environment.API_URL.concat("/auth/email-confirmation"), {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ token }),
    });

    if (!response.ok) {
        throw new Error("Email confirmation failed");
    }

    const result = await response.json();

    return result["success"];
}
