import type { ID } from "@shared/entity/types/id";

export interface Category {
    id: ID;
    name: string;
    description: string;
}

export type NewCategory = Omit<Category, "id">;
