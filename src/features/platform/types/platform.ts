import type { ID } from "@shared/entity/types/id";
import type { PlatformType } from "@features/platform/types/enums";

export interface Platform {
    id: ID;
    name: string;
    abbreviation: string;
    type: PlatformType;
    developer: string;
    manufacturer: string;
    description: string;
}

export type NewPlatform = Omit<Platform, "id">;
