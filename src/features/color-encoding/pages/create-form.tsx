import { useNavigator } from "@shared/router/hooks/navigator";
import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { ColorEncodingFormData } from "@features/color-encoding/types/form";
import type { NewColorEncoding } from "@features/color-encoding/types/color-encoding";
import { useSession } from "@features/auth/hooks/session";
import { createColorEncoding } from "@features/color-encoding/utils/api";
import { ColorEncodingForm } from "@features/color-encoding/components/color-encoding-form";

export function ColorEncodingCreateFormPage() {
    useApplicationHeader(
        "Create Color Encoding",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/color-encoding/list");
                }
            },
        ]
    );

    const { session } = useSession();
    const navigate = useNavigator();

    const handleSubmit = (data: ColorEncodingFormData) => {
        const newColorEncoding: NewColorEncoding = {
            name: data.name,
            description: data.description
        };

        createColorEncoding(session!, newColorEncoding)
            .then(() => {
                navigate.to("/app/color-encoding/list");
            })
            .catch((error: Error) => {
                console.error("Failed to create color encoding:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/color-encoding/list");
    };

    return (
        <ColorEncodingForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
