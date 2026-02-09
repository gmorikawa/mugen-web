import type { UserRole } from "@features/user/types/enums";
import type { UserProfile } from "@features/user/types/user-profile";
import type { ID } from "@shared/entity/types/id";

export interface CreateUserDTO {
    username: string;
    email: string;
    role: UserRole;
    password: string;
}

export interface UpdateUserDTO {
    id: ID;
    username: string;
    email: string;
    role: UserRole;

    profile?: UserProfile;
}
