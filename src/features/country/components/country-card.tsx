import { Card } from "@components/container/card";
import { Container } from "@components/container/container";
import { Paragraph } from "@components/typography/paragraph";
import { Title } from "@components/typography/title";

import type { Country } from "@features/country/types/country";

export interface CountryCardProps {
    country: Country;

    actionSlot?: React.ReactNode;
}

export function CountryCard({
    country,
    actionSlot
}: CountryCardProps) {
    return (
        <Card>
            <Container
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <Container
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: "16px",
                    }}
                >
                    <Container>
                        <Title level={5}>
                            {country.name}
                        </Title>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {country.flag || "No flag"}
                        </Paragraph>
                    </Container>
                </Container>

                <Container>
                    {actionSlot}
                </Container>
            </Container>
        </Card>
    );
}
