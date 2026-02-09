import type { PaginationConfiguration } from "@shared/search/hooks/pagination";
import { useSearch, type SearchController } from "@shared/search/hooks/search";

import type { Platform } from "@features/platform/types/platform";
import type { PageCount } from "@shared/search/types/pagination";
import { useAlert } from "@components/feedback/alert/controller";
import { usePlatformService } from "./platform-service";

export interface PlatformSearchConfiguration extends PaginationConfiguration { }

export interface PlatformSearchController extends SearchController<Platform> { }

export function usePlatformSearch(
    config?: PlatformSearchConfiguration
): PlatformSearchController {
    const alert = useAlert();
    const service = usePlatformService();

    return useSearch<Platform>({
        ...config,
        fetchCount: async (): Promise<PageCount> => {
            return 0;
            // return service.countAll()
            //     .catch((error: Error) => {
            //         alert.showErrorMessage(error);
            //         return 0;
            //     });
        },
        fetchData: async (): Promise<Platform[]> => {
            return service.getAll()
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return [];
                });
        },
    });
}
