import type { PaginationConfiguration } from "@shared/search/hooks/pagination";
import { useSearch, type SearchController } from "@shared/search/hooks/search";

import type { Language } from "@features/language/types/language";
import type { PageCount } from "@shared/search/types/pagination";
import { useAlert } from "@components/feedback/alert/controller";
import { useLanguageService } from "./language-service";

export interface LanguageSearchConfiguration extends PaginationConfiguration { }

export interface LanguageSearchController extends SearchController<Language> { }

export function useLanguageSearch(
    config?: LanguageSearchConfiguration
): LanguageSearchController {
    const alert = useAlert();
    const service = useLanguageService();

    return useSearch<Language>({
        ...config,
        fetchCount: async (): Promise<PageCount> => {
            return 0;
            // return service.countAll()
            //     .catch((error: Error) => {
            //         alert.showErrorMessage(error);
            //         return 0;
            //     });
        },
        fetchData: async (): Promise<Language[]> => {
            return service.getAll()
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return [];
                });
        },
    });
}
