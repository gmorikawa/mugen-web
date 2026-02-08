import type { UserRole } from "@features/user/types/enums";
import type { UserProfile } from "@features/user/types/user-profile";

export interface UpdateUserDTO {
    username: string;
    email: string;
    role: UserRole;

    profile?: UserProfile;
}
