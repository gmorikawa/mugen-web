import type { ID } from "@shared/entity/types/id";

export interface Language {
    id: ID;
    name: string;
    isoCode: string;
}

export type NewLanguage = Omit<Language, "id">;
