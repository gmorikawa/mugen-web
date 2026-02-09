import type { ID } from "@shared/entity/types/id";
import { useEntity, type EntityController } from "@shared/entity/hooks/entity";

import { useAlert } from "@components/feedback/alert/controller";

import type { Company } from "@features/company/types/company";
import { useCompanyService } from "@features/company/hooks/company-service";

export interface CompanyEntityController extends EntityController<Company> { }

export function useCompanyEntity(
    id: ID
) {
    const alert = useAlert();
    const service = useCompanyService();

    return useEntity<Company>({
        fetchEntity: async () => {
            return service.getById(id)
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return null;
                });
        }
    });
}
