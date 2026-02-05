import { Form, Input } from "antd";

import { useNavigator } from "@shared/router/hooks/navigator";

import { Card } from "@components/container/card";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { Credentials } from "@features/auth/types/credentials";
import type { Session } from "@features/auth/types/session";
import { useSession } from "@features/auth/hooks/session";
import { login } from "@features/auth/utils/api";

export function LoginPage() {
    const { update } = useSession();
    const navigate = useNavigator();

    const handleFinish = (values: Credentials) => {
        login(values.username, values.password)
            .then((session: Session) => {
                update(session.token, session.loggedUser);

                navigate.to("/app/user/list");
            })
            .catch((error) => {
                console.error("Login failed:", error);
            });
    };

    const handleFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

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

            <Form
                name="basic"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                autoComplete="off"
            >
                <Form.Item<string>
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    style={{ textAlign: "center" }}
                >
                    <SubmitButton>
                        Sign in
                    </SubmitButton>
                </Form.Item>
            </Form>
        </Card>
    );
}
