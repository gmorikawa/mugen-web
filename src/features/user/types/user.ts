import type { UserRole } from "@features/user/types/enums";
import type { ID } from "@shared/entity/types/id";
import type { UserProfile } from "./user-profile";

export interface User {
    id: ID;
    username: string;
    email: string;
    role: UserRole;
    profile?: UserProfile;
}

export interface NewUser {
    username: string;
    password: string;
    email: string;
    role: UserRole;
}
