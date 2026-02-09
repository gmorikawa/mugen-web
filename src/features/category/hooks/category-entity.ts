import type { ID } from "@shared/entity/types/id";
import { useEntity, type EntityController } from "@shared/entity/hooks/entity";

import { useAlert } from "@components/feedback/alert/controller";

import type { Category } from "@features/category/types/category";
import { useCategoryService } from "@features/category/hooks/category-service";

export interface CategoryEntityController extends EntityController<Category> { }

export function useCategoryEntity(
    id: ID
) {
    const alert = useAlert();
    const service = useCategoryService();

    return useEntity<Category>({
        fetchEntity: async () => {
            return service.getById(id)
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return null;
                });
        }
    });
}
