import type { PaginationConfiguration } from "@shared/search/hooks/pagination";
import { useSearch, type SearchController } from "@shared/search/hooks/search";

import type { Company } from "@features/company/types/company";
import type { PageCount } from "@shared/search/types/pagination";
import { useAlert } from "@components/feedback/alert/controller";
import { useCompanyService } from "./company-service";

export interface CompanySearchConfiguration extends PaginationConfiguration { }

export interface CompanySearchController extends SearchController<Company> { }

export function useCompanySearch(
    config?: CompanySearchConfiguration
): CompanySearchController {
    const alert = useAlert();
    const service = useCompanyService();

    return useSearch<Company>({
        ...config,
        fetchCount: async (): Promise<PageCount> => {
            return 0;
            // return service.countAll()
            //     .catch((error: Error) => {
            //         alert.showErrorMessage(error);
            //         return 0;
            //     });
        },
        fetchData: async (): Promise<Company[]> => {
            return service.getAll()
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return [];
                });
        },
    });
}
