import { useEffect, useState } from "react";

import { useNavigator } from "@shared/router/hooks/navigator";
import { useQuery } from "@shared/router/hooks/query";

import { Button } from "@components/button/button";
import { Card } from "@components/container/card";
import { Container } from "@components/container/container";
import { Paragraph } from "@components/typography/paragraph";
import { Title } from "@components/typography/title";

import type { Token } from "@features/auth/types/token";
import { confirmEmail } from "@features/auth/utils/api";

type QueryWithParams = {
    token: Token
}

export function EmailConfirmationPage() {
    const { token } = useQuery<QueryWithParams>();
    const navigate = useNavigator();

    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    const handleReturnToLogin = () => {
        navigate.to("/login");
    };

    useEffect(() => {
        confirmEmail(token)
            .then((result: boolean) => {
                setSuccess(result);
            })
            .catch((_: Error) => {
                setSuccess(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <Card
            style={{
                width: "100%",
                maxWidth: "500px",
            }}
        >
            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                <Title
                    level={3}
                    style={{
                        textAlign: "center",
                    }}
                >
                    Email Confirmation
                </Title>

                {(loading) && (
                    <Paragraph>
                        Confirming your email, please wait...
                    </Paragraph>
                )}

                {(!loading && success) && (
                    <Paragraph style={{ color: "green" }}>
                        Your email has been successfully confirmed. You can now log in to your account.
                    </Paragraph>
                )}

                {(!loading && !success) && (
                    <Paragraph style={{ color: "red" }}>
                        Email confirmation failed. The token may be invalid or expired.
                    </Paragraph>
                )}

                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Button
                        onClick={handleReturnToLogin}
                    >
                        Go to Login
                    </Button>
                </Container>
            </Container>
        </Card>
    );
}
