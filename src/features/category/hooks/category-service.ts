import type { ID } from "@shared/entity/types/id";

import { useSession } from "@features/auth/hooks/session";
import type { Category, NewCategory } from "@features/category/types/category";
import {
    createCategory,
    deleteCategory,
    getCategoryById,
    getCategories,
    updateCategory
} from "@features/category/utils/api";

export interface CategoryService {
    getAll(): Promise<Category[]>;
    getById(id: ID): Promise<Category>;
    create(category: NewCategory): Promise<Category>;
    update(category: Category): Promise<Category>;
    delete(category: Category): Promise<boolean>;
}

export function useCategoryService(): CategoryService {
    const { session } = useSession();

    if (!session) {
        throw new Error("No session available");
    }

    return {
        getAll: async () => getCategories(session),
        getById: async (id: ID) => getCategoryById(session, id),
        create: async (category: NewCategory) => createCategory(session, category),
        update: async (category: Category) => updateCategory(session, category.id, category),
        delete: async (category: Category) => deleteCategory(session, category.id)
    }
}
