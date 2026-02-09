import type { ID } from "@shared/entity/types/id";

export interface ColorEncoding {
    id: ID;
    name: string;
    description: string;
}

export type NewColorEncoding = Omit<ColorEncoding, "id">;
