import type { ID } from "@shared/entity/types/id";
import { useEntity, type EntityController } from "@shared/entity/hooks/entity";

import { useAlert } from "@components/feedback/alert/controller";

import type { Language } from "@features/language/types/language";
import { useLanguageService } from "@features/language/hooks/language-service";

export interface LanguageEntityController extends EntityController<Language> { }

export function useLanguageEntity(
    id: ID
) {
    const alert = useAlert();
    const service = useLanguageService();

    return useEntity<Language>({
        fetchEntity: async () => {
            return service.getById(id)
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return null;
                });
        }
    });
}
