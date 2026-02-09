import type { ID } from "@shared/entity/types/id";
import { useApplicationHeader } from "@shared/application/hooks/application-header";
import { useNavigator } from "@shared/router/hooks/navigator";
import { useParams } from "@shared/router/hooks/params";

import type { Language } from "@features/language/types/language";
import type { LanguageFormData } from "@features/language/types/form";
import { useLanguageService } from "@features/language/hooks/language-service";
import { useLanguageEntity } from "@features/language/hooks/language-entity";
import { LanguageForm } from "@features/language/components/language-form";

type ParamsWithId = {
    id: ID;
};

export function LanguageUpdateFormPage() {
    useApplicationHeader(
        "Update Language",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/language/list");
                }
            },
        ]
    );

    const { id } = useParams<ParamsWithId>();
    const navigate = useNavigator();
    const service = useLanguageService();
    const language = useLanguageEntity(id);

    const handleSubmit = (data: LanguageFormData) => {
        const updatedLanguage: Language = {
            id: id,
            name: data.name,
            isoCode: data.isoCode
        };

        service.update(updatedLanguage)
            .then(() => {
                navigate.to("/app/language/list");
            })
            .catch((error: Error) => {
                console.error("Failed to update language:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/language/list");
    };

    return (language.entity) && (
        <LanguageForm
            initialValues={{
                name: language.entity.name,
                isoCode: language.entity.isoCode
            }}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}