import type { ID } from "@shared/entity/types/id";
import { useEntity, type EntityController } from "@shared/entity/hooks/entity";

import { useAlert } from "@components/feedback/alert/controller";

import type { Platform } from "@features/platform/types/platform";
import { usePlatformService } from "@features/platform/hooks/platform-service";

export interface PlatformEntityController extends EntityController<Platform> { }

export function usePlatformEntity(
    id: ID
) {
    const alert = useAlert();
    const service = usePlatformService();

    return useEntity<Platform>({
        fetchEntity: async () => {
            return service.getById(id)
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return null;
                });
        }
    });
}
