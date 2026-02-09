import type { PaginationConfiguration } from "@shared/search/hooks/pagination";
import { useSearch, type SearchController } from "@shared/search/hooks/search";

import type { ColorEncoding } from "@features/color-encoding/types/color-encoding";
import type { PageCount } from "@shared/search/types/pagination";
import { useAlert } from "@components/feedback/alert/controller";
import { useColorEncodingService } from "./color-encoding-service";

export interface ColorEncodingSearchConfiguration extends PaginationConfiguration { }

export interface ColorEncodingSearchController extends SearchController<ColorEncoding> { }

export function useColorEncodingSearch(
    config?: ColorEncodingSearchConfiguration
): ColorEncodingSearchController {
    const alert = useAlert();
    const service = useColorEncodingService();

    return useSearch<ColorEncoding>({
        ...config,
        fetchCount: async (): Promise<PageCount> => {
            return 0;
            // return service.countAll()
            //     .catch((error: Error) => {
            //         alert.showErrorMessage(error);
            //         return 0;
            //     });
        },
        fetchData: async (): Promise<ColorEncoding[]> => {
            return service.getAll()
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return [];
                });
        },
    });
}
