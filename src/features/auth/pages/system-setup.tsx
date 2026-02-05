import { Form, Input } from "antd";

import { Card } from "@components/container/card";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { AdminSignup } from "@features/auth/types/adminSignup";
import { systemSetup } from "@features/auth/utils/api";
import { Button } from "@components/button/button";
import { Paragraph } from "@components/typography/paragraph";

export function SystemSetupPage() {
    const handleFinish = (values: AdminSignup) => {
        systemSetup(values.email, values.username, values.password)
            .then(() => {
                console.log("System setup successful");
            })
            .catch((error) => {
                console.error("System setup failed:", error);
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
                Admin - First Access Setup
            </Title>

            <Paragraph>
                Please create the first admin account to set up the system.
            </Paragraph>

            <Form
                name="basic"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{

                }}
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                autoComplete="off"
            >
                <Form.Item<string>
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                        { type: "email", message: "The input is not valid E-mail!" }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: "Please input your username!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Please input your password!" }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<string>
                    label="Password Confirmation"
                    name="passwordConfirmation"
                    dependencies={["password"]}
                    rules={[
                        { required: true, message: "Please confirm your password!" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    style={{ textAlign: "center" }}
                >
                    <SubmitButton>
                        Submit
                    </SubmitButton>
                </Form.Item>

                <Form.Item
                    style={{ textAlign: "center" }}
                >
                    <Button
                        type="link"
                        href="/"
                    >
                        Back to Login
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
