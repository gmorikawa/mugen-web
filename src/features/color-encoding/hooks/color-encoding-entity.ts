import type { ID } from "@shared/entity/types/id";
import { useEntity, type EntityController } from "@shared/entity/hooks/entity";

import { useAlert } from "@components/feedback/alert/controller";

import type { ColorEncoding } from "@features/color-encoding/types/color-encoding";
import { useColorEncodingService } from "@features/color-encoding/hooks/color-encoding-service";

export interface ColorEncodingEntityController extends EntityController<ColorEncoding> { }

export function useColorEncodingEntity(
    id: ID
) {
    const alert = useAlert();
    const service = useColorEncodingService();

    return useEntity<ColorEncoding>({
        fetchEntity: async () => {
            return service.getById(id)
                .catch((error: Error) => {
                    alert.showErrorMessage(error);
                    return null;
                });
        }
    });
}
