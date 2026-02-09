import type { ID } from "@shared/entity/types/id";
import { useApplicationHeader } from "@shared/application/hooks/application-header";
import { useNavigator } from "@shared/router/hooks/navigator";
import { useParams } from "@shared/router/hooks/params";

import type { Platform } from "@features/platform/types/platform";
import type { PlatformFormData } from "@features/platform/types/form";
import { usePlatformService } from "@features/platform/hooks/platform-service";
import { usePlatformEntity } from "@features/platform/hooks/platform-entity";
import { PlatformForm } from "@features/platform/components/platform-form";

type ParamsWithId = {
    id: ID;
};

export function PlatformUpdateFormPage() {
    useApplicationHeader(
        "Update Platform",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/platform/list");
                }
            },
        ]
    );

    const { id } = useParams<ParamsWithId>();
    const navigate = useNavigator();
    const service = usePlatformService();
    const platform = usePlatformEntity(id);

    const handleSubmit = (data: PlatformFormData) => {
        const updatedPlatform: Platform = {
            id: id,
            name: data.name,
            abbreviation: data.abbreviation,
            type: data.type,
            developer: data.developer,
            manufacturer: data.manufacturer,
            description: data.description
        };

        service.update(updatedPlatform)
            .then(() => {
                navigate.to("/app/platform/list");
            })
            .catch((error: Error) => {
                console.error("Failed to update platform:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/platform/list");
    };

    return (platform.entity) && (
        <PlatformForm
            initialValues={{
                name: platform.entity.name,
                abbreviation: platform.entity.abbreviation,
                type: platform.entity.type,
                developer: platform.entity.developer,
                manufacturer: platform.entity.manufacturer,
                description: platform.entity.description
            }}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
