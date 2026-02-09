import { Card } from "@components/container/card";
import { Container } from "@components/container/container";
import { Paragraph } from "@components/typography/paragraph";
import { Title } from "@components/typography/title";

import type { Category } from "@features/category/types/category";

export interface CategoryCardProps {
    category: Category;

    actionSlot?: React.ReactNode;
}

export function CategoryCard({
    category,
    actionSlot
}: CategoryCardProps) {
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
                            {category.name}
                        </Title>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {category.description}
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
