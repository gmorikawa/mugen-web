import type { UserRole } from "./enums";

export interface CreateUserData {
    username: string;
    email: string;
    role: UserRole;
    password: string;
    passwordConfirm: string;
}