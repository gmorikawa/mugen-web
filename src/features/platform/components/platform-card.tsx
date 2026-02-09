import { Card } from "@components/container/card";
import { Container } from "@components/container/container";
import { Paragraph } from "@components/typography/paragraph";
import { Title } from "@components/typography/title";

import type { Platform } from "@features/platform/types/platform";

export interface PlatformCardProps {
    platform: Platform;

    actionSlot?: React.ReactNode;
}

export function PlatformCard({
    platform,
    actionSlot
}: PlatformCardProps) {
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
                            {platform.name}
                        </Title>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {platform.abbreviation}
                        </Paragraph>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {platform.type}
                        </Paragraph>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {platform.developer}
                        </Paragraph>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {platform.manufacturer}
                        </Paragraph>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {platform.description}
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
