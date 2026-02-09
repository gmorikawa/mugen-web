import type { ID } from "@shared/entity/types/id";

import { useSession } from "@features/auth/hooks/session";
import type { ColorEncoding, NewColorEncoding } from "@features/color-encoding/types/color-encoding";
import {
    createColorEncoding,
    deleteColorEncoding,
    getColorEncodingById,
    getColorEncodings,
    updateColorEncoding
} from "@features/color-encoding/utils/api";

export interface ColorEncodingService {
    getAll(): Promise<ColorEncoding[]>;
    getById(id: ID): Promise<ColorEncoding>;
    create(colorEncoding: NewColorEncoding): Promise<ColorEncoding>;
    update(colorEncoding: ColorEncoding): Promise<ColorEncoding>;
    delete(colorEncoding: ColorEncoding): Promise<boolean>;
}

export function useColorEncodingService(): ColorEncodingService {
    const { session } = useSession();

    if (!session) {
        throw new Error("No session available");
    }

    return {
        getAll: async () => getColorEncodings(session),
        getById: async (id: ID) => getColorEncodingById(session, id),
        create: async (colorEncoding: NewColorEncoding) => createColorEncoding(session, colorEncoding),
        update: async (colorEncoding: ColorEncoding) => updateColorEncoding(session, colorEncoding.id, colorEncoding),
        delete: async (colorEncoding: ColorEncoding) => deleteColorEncoding(session, colorEncoding.id)
    }
}
