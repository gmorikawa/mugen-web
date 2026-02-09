import { useNavigator } from "@shared/router/hooks/navigator";
import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { LanguageFormData } from "@features/language/types/language-form-data";
import type { CreateLanguageDTO } from "@features/language/types/dto";
import { useSession } from "@features/auth/hooks/session";
import { createLanguage } from "@features/language/utils/api";
import { LanguageForm } from "@features/language/components/language-form";

export function LanguageCreateFormPage() {
    useApplicationHeader(
        "Create Language",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/language/list");
                }
            },
        ]
    );

    const { session } = useSession();
    const navigate = useNavigator();

    const handleSubmit = (data: LanguageFormData) => {
        const newLanguage: CreateLanguageDTO = {
            name: data.name,
            isoCode: data.isoCode
        };

        createLanguage(session!, newLanguage)
            .then(() => {
                navigate.to("/app/language/list");
            })
            .catch((error: Error) => {
                console.error("Failed to create language:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/language/list");
    };

    return (
        <LanguageForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}