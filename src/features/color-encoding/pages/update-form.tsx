import type { ID } from "@shared/entity/types/id";
import { useApplicationHeader } from "@shared/application/hooks/application-header";
import { useNavigator } from "@shared/router/hooks/navigator";
import { useParams } from "@shared/router/hooks/params";

import type { ColorEncoding } from "@features/color-encoding/types/color-encoding";
import type { ColorEncodingFormData } from "@features/color-encoding/types/form";
import { useColorEncodingService } from "@features/color-encoding/hooks/color-encoding-service";
import { useColorEncodingEntity } from "@features/color-encoding/hooks/color-encoding-entity";
import { ColorEncodingForm } from "@features/color-encoding/components/color-encoding-form";

type ParamsWithId = {
    id: ID;
};

export function ColorEncodingUpdateFormPage() {
    useApplicationHeader(
        "Update Color Encoding",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/color-encoding/list");
                }
            },
        ]
    );

    const { id } = useParams<ParamsWithId>();
    const navigate = useNavigator();
    const service = useColorEncodingService();
    const colorEncoding = useColorEncodingEntity(id);

    const handleSubmit = (data: ColorEncodingFormData) => {
        const updatedColorEncoding: ColorEncoding = {
            id: id,
            name: data.name,
            description: data.description
        };

        service.update(updatedColorEncoding)
            .then(() => {
                navigate.to("/app/color-encoding/list");
            })
            .catch((error: Error) => {
                console.error("Failed to update color encoding:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/color-encoding/list");
    };

    return (colorEncoding.entity) && (
        <ColorEncodingForm
            initialValues={{
                name: colorEncoding.entity.name,
                description: colorEncoding.entity.description
            }}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
