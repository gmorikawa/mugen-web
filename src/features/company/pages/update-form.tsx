import type { ID } from "@shared/entity/types/id";
import { useApplicationHeader } from "@shared/application/hooks/application-header";
import { useNavigator } from "@shared/router/hooks/navigator";
import { useParams } from "@shared/router/hooks/params";

import type { Company } from "@features/company/types/company";
import type { CompanyFormData } from "@features/company/types/form";
import { useCompanyService } from "@features/company/hooks/company-service";
import { useCompanyEntity } from "@features/company/hooks/company-entity";
import { CompanyForm } from "@features/company/components/company-form";

type ParamsWithId = {
    id: ID;
};

export function CompanyUpdateFormPage() {
    useApplicationHeader(
        "Update Company",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/company/list");
                }
            },
        ]
    );

    const { id } = useParams<ParamsWithId>();
    const navigate = useNavigator();
    const service = useCompanyService();
    const company = useCompanyEntity(id);

    const handleSubmit = (data: CompanyFormData) => {
        const updatedCompany: Company = {
            id: id,
            name: data.name,
            country: data.country,
            description: data.description
        };

        service.update(updatedCompany)
            .then(() => {
                navigate.to("/app/company/list");
            })
            .catch((error: Error) => {
                console.error("Failed to update company:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/company/list");
    };

    return (company.entity) && (
        <CompanyForm
            initialValues={{
                name: company.entity.name,
                country: company.entity.country,
                description: company.entity.description
            }}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
