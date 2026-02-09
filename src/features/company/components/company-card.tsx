import { Card } from "@components/container/card";
import { Container } from "@components/container/container";
import { Paragraph } from "@components/typography/paragraph";
import { Title } from "@components/typography/title";

import type { Company } from "@features/company/types/company";

export interface CompanyCardProps {
    company: Company;

    actionSlot?: React.ReactNode;
}

export function CompanyCard({
    company,
    actionSlot
}: CompanyCardProps) {
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
                            {company.name}
                        </Title>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {company.country}
                        </Paragraph>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {company.description}
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
