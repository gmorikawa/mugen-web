import { useNavigator } from "@shared/router/hooks/navigator";
import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { CompanyFormData } from "@features/company/types/form";
import type { NewCompany } from "@features/company/types/company";
import { useSession } from "@features/auth/hooks/session";
import { createCompany } from "@features/company/utils/api";
import { CompanyForm } from "@features/company/components/company-form";

export function CompanyCreateFormPage() {
    useApplicationHeader(
        "Create Company",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/company/list");
                }
            },
        ]
    );

    const { session } = useSession();
    const navigate = useNavigator();

    const handleSubmit = (data: CompanyFormData) => {
        const newCompany: NewCompany = {
            name: data.name,
            country: data.country,
            description: data.description
        };

        createCompany(session!, newCompany)
            .then(() => {
                navigate.to("/app/company/list");
            })
            .catch((error: Error) => {
                console.error("Failed to create company:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/company/list");
    };

    return (
        <CompanyForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
