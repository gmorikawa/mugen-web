import type { ID } from "@shared/entity/types/id";
import { useApplicationHeader } from "@shared/application/hooks/application-header";
import { useNavigator } from "@shared/router/hooks/navigator";
import { useParams } from "@shared/router/hooks/params";

import type { Country } from "@features/country/types/country";
import type { CountryFormData } from "@features/country/types/form";
import { useCountryService } from "@features/country/hooks/country-service";
import { useCountryEntity } from "@features/country/hooks/country-entity";
import { CountryForm } from "@features/country/components/country-form";

type ParamsWithId = {
    id: ID;
};

export function CountryUpdateFormPage() {
    useApplicationHeader(
        "Update Country",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/country/list");
                }
            },
        ]
    );

    const { id } = useParams<ParamsWithId>();
    const navigate = useNavigator();
    const service = useCountryService();
    const country = useCountryEntity(id);

    const handleSubmit = (data: CountryFormData) => {
        const updatedCountry: Country = {
            id: id,
            name: data.name,
            flag: data.flag
        };

        service.update(updatedCountry)
            .then(() => {
                navigate.to("/app/country/list");
            })
            .catch((error: Error) => {
                console.error("Failed to update country:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/country/list");
    };

    return (country.entity) && (
        <CountryForm
            initialValues={{
                name: country.entity.name,
                flag: country.entity.flag
            }}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
