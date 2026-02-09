import { Card } from "@components/container/card";
import { Container } from "@components/container/container";
import { Paragraph } from "@components/typography/paragraph";
import { Title } from "@components/typography/title";

import type { ColorEncoding } from "@features/color-encoding/types/color-encoding";

export interface ColorEncodingCardProps {
    colorEncoding: ColorEncoding;

    actionSlot?: React.ReactNode;
}

export function ColorEncodingCard({
    colorEncoding,
    actionSlot
}: ColorEncodingCardProps) {
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
                            {colorEncoding.name}
                        </Title>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {colorEncoding.description}
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
