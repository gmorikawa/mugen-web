import { Card } from "@components/container/card";
import { Container } from "@components/container/container";
import { Avatar } from "@components/data-display/avatar";
import { Paragraph } from "@components/typography/paragraph";
import { Title } from "@components/typography/title";
import type { User } from "@features/user/types/user";

export interface UserCardProps {
    user: User;

    actionSlot?: React.ReactNode;
}

export function UserCard({
    user,
    actionSlot
}: UserCardProps) {
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
                    <Avatar size="large">
                        {user.username.charAt(0).toUpperCase()}
                    </Avatar>

                    <Container>
                        <Title level={5}>
                            {user.username}
                        </Title>

                        <Paragraph
                            style={{
                                color: "gray"
                            }}
                        >
                            {user.email}
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
