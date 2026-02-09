import { useEffect, useState } from "react";

export interface EntityConfiguration<Entity> {
    fetchEntity: () => Promise<Entity | null>;
}

export interface EntityController<Entity> {
    entity: Entity | null;
    refresh: () => Promise<void>;
}

export function useEntity<Entity>({
    fetchEntity
}: EntityConfiguration<Entity>): EntityController<Entity> {
    const [entity, setEntity] = useState<Entity | null>(null);

    const loadEntity = async () => {
        return fetchEntity()
            .then((fetchedEntity: Entity | null) => {
                setEntity(fetchedEntity);
            });
    };

    useEffect(() => {
        loadEntity();
    }, []);
    return {
        entity,
        refresh: async () => {
            return loadEntity();
        }
    };
}