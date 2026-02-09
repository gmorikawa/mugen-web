import type { UserRole } from "./enums";
import type { UserProfile } from "./user-profile";

export interface UpdateUserData {
    username: string;
    email: string;
    role: UserRole;

    profile: UserProfile;
}