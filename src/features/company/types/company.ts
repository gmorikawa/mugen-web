import type { ID } from "@shared/entity/types/id";

export interface Company {
    id: ID;
    name: string;
    country: string;
    description: string;
}

export type NewCompany = Omit<Company, "id">;
