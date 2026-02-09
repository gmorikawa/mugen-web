import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { Country } from "@features/country/types/country";
import { useNavigator } from "@shared/router/hooks/navigator";
import { CountryCard } from "@features/country/components/country-card";
import { Container } from "@components/container/container";
import { Button } from "@components/button/button";
import { useCountryService } from "@features/country/hooks/country-service";
import { useCountrySearch } from "@features/country/hooks/country-search";

export function CountryListPage() {
    useApplicationHeader(
        "Country List",
        [
            {
                label: "New",
                action: () => {
                    navigate.to("/app/country/form");
                }
            }
        ]
    );

    const service = useCountryService();
    const countries = useCountrySearch();
    const navigate = useNavigator();

    const handleUpdate = (country: Country) => {
        navigate.to(`/app/country/form/${country.id}`);
    };

    const handleDelete = (country: Country) => {
        service.delete(country)
            .then(() => {
                countries.refresh();
            })
            .catch((_: Error) => {
            });
    };

    return countries.data.map((country: Country) => (
        <CountryCard
            key={country.id}
            country={country}
            actionSlot={
                <Container
                    style={{
                        display: "flex",
                        gap: "8px",
                    }}
                >
                    <Button onClick={() => handleUpdate(country)} color="primary" variant="outlined">Edit</Button>
                    <Button onClick={() => handleDelete(country)} color="danger" variant="outlined">Delete</Button>
                </Container>
            }
        />
    ));
}
