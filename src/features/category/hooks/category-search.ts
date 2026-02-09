import type { PaginationConfiguration } from "@shared/search/hooks/pagination";
import { useSearch, type SearchController } from "@shared/search/hooks/search";

import type { Category } from "@features/category/types/category";
import type { PageCount } from "@shared/search/types/pagination";
import { useAlert } from "@components/feedback/alert/controller";
import { useCategoryService } from "./category-service";

export interface CategorySearchConfiguration extends PaginationConfiguration { }

export interface CategorySearchController extends SearchController<Category> { }

export function useCategorySearch(
    config?: CategorySearchConfiguration
): CategorySearchController {
    const alert = useAlert();
    const service = useCategoryService();

    return useSearch<Category>({
        ...config,
        fetchCount: async (): Promise<PageCount> => {
            return 0;
            // return service.countAll()
            //     .catch((error: Error) => {
            //         alert.showErrorMessage(error);
            //         return 0;
            //     });
        },
        fetchData: async (): Promise<Category[]> => {
            return service.getAll()
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return [];
                });
        },
    });
}
