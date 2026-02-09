import type { ID } from "@shared/entity/types/id";

export interface Country {
    id: ID;
    name: string;
    flag?: string;
}

export type NewCountry = Omit<Country, "id">;
