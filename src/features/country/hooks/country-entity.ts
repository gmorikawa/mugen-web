import type { ID } from "@shared/entity/types/id";
import { useEntity, type EntityController } from "@shared/entity/hooks/entity";

import { useAlert } from "@components/feedback/alert/controller";

import type { Country } from "@features/country/types/country";
import { useCountryService } from "@features/country/hooks/country-service";

export interface CountryEntityController extends EntityController<Country> { }

export function useCountryEntity(
    id: ID
) {
    const alert = useAlert();
    const service = useCountryService();

    return useEntity<Country>({
        fetchEntity: async () => {
            return service.getById(id)
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return null;
                });
        }
    });
}
