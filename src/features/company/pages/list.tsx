import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { Company } from "@features/company/types/company";
import { useNavigator } from "@shared/router/hooks/navigator";
import { CompanyCard } from "@features/company/components/company-card";
import { Container } from "@components/container/container";
import { Button } from "@components/button/button";
import { useCompanyService } from "@features/company/hooks/company-service";
import { useCompanySearch } from "@features/company/hooks/company-search";

export function CompanyListPage() {
    useApplicationHeader(
        "Company List",
        [
            {
                label: "New",
                action: () => {
                    navigate.to("/app/company/form");
                }
            }
        ]
    );

    const service = useCompanyService();
    const companies = useCompanySearch();
    const navigate = useNavigator();

    const handleUpdate = (company: Company) => {
        navigate.to(`/app/company/form/${company.id}`);
    };

    const handleDelete = (company: Company) => {
        service.delete(company)
            .then(() => {
                companies.refresh();
            })
            .catch((_: Error) => {
            });
    };

    return companies.data.map((company: Company) => (
        <CompanyCard
            key={company.id}
            company={company}
            actionSlot={
                <Container
                    style={{
                        display: "flex",
                        gap: "8px",
                    }}
                >
                    <Button onClick={() => handleUpdate(company)} color="primary" variant="outlined">Edit</Button>
                    <Button onClick={() => handleDelete(company)} color="danger" variant="outlined">Delete</Button>
                </Container>
            }
        />
    ));
}
