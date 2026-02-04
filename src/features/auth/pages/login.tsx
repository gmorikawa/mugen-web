import { Card } from "@components/container/card";
import { Title } from "@components/typography/title";

export function LoginPage() {
    return (
        <Card
            style={{
                width: "100%",
                maxWidth: "500px",
            }}
        >
            <Title
                level={3}
                style={{
                    textAlign: "center"
                }}
            >
                Login
            </Title>
        </Card>
    );
}
