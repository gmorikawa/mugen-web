import type { PaginationConfiguration } from "@shared/search/hooks/pagination";
import { useSearch, type SearchController } from "@shared/search/hooks/search";

import type { Country } from "@features/country/types/country";
import type { PageCount } from "@shared/search/types/pagination";
import { useAlert } from "@components/feedback/alert/controller";
import { useCountryService } from "./country-service";

export interface CountrySearchConfiguration extends PaginationConfiguration { }

export interface CountrySearchController extends SearchController<Country> { }

export function useCountrySearch(
    config?: CountrySearchConfiguration
): CountrySearchController {
    const alert = useAlert();
    const service = useCountryService();

    return useSearch<Country>({
        ...config,
        fetchCount: async (): Promise<PageCount> => {
            return 0;
            // return service.countAll()
            //     .catch((error: Error) => {
            //         alert.showErrorMessage(error);
            //         return 0;
            //     });
        },
        fetchData: async (): Promise<Country[]> => {
            return service.getAll()
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return [];
                });
        },
    });
}
