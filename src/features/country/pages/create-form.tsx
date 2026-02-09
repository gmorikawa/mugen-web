import { useNavigator } from "@shared/router/hooks/navigator";
import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { CountryFormData } from "@features/country/types/form";
import type { NewCountry } from "@features/country/types/country";
import { useSession } from "@features/auth/hooks/session";
import { createCountry } from "@features/country/utils/api";
import { CountryForm } from "@features/country/components/country-form";

export function CountryCreateFormPage() {
    useApplicationHeader(
        "Create Country",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/country/list");
                }
            },
        ]
    );

    const { session } = useSession();
    const navigate = useNavigator();

    const handleSubmit = (data: CountryFormData) => {
        const newCountry: NewCountry = {
            name: data.name,
            flag: data.flag
        };

        createCountry(session!, newCountry)
            .then(() => {
                navigate.to("/app/country/list");
            })
            .catch((error: Error) => {
                console.error("Failed to create country:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/country/list");
    };

    return (
        <CountryForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
