import type { PlatformType } from "@features/platform/types/enums";

export interface PlatformFormData {
    name: string;
    abbreviation: string;
    type: PlatformType;
    developer: string;
    manufacturer: string;
    description: string;
}
