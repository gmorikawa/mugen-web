import type { ID } from "@shared/entity/types/id";

import { useSession } from "@features/auth/hooks/session";
import type { Platform, NewPlatform } from "@features/platform/types/platform";
import {
    createPlatform,
    deletePlatform,
    getPlatformById,
    getPlatforms,
    updatePlatform
} from "@features/platform/utils/api";

export interface PlatformService {
    getAll(): Promise<Platform[]>;
    getById(id: ID): Promise<Platform>;
    create(platform: NewPlatform): Promise<Platform>;
    update(platform: Platform): Promise<Platform>;
    delete(platform: Platform): Promise<boolean>;
}

export function usePlatformService(): PlatformService {
    const { session } = useSession();

    if (!session) {
        throw new Error("No session available");
    }

    return {
        getAll: async () => getPlatforms(session),
        getById: async (id: ID) => getPlatformById(session, id),
        create: async (platform: NewPlatform) => createPlatform(session, platform),
        update: async (platform: Platform) => updatePlatform(session, platform.id, platform),
        delete: async (platform: Platform) => deletePlatform(session, platform.id)
    }
}
