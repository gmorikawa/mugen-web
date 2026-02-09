import { Form, Input } from "antd";

import { CancelButton } from "@shared/form/components/cancel-button";

import { Container } from "@components/container/container";
import { RadioInput } from "@components/form/radio-input";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { UserRole } from "@features/user/types/enums";
import type { CreateUserData } from "../types/create-user-data";

export interface UserCreateFormProps {
    onSubmit?: (data: CreateUserData) => void;
    onCancel?: () => void;
}

export function UserCreateForm({
    onSubmit,
    onCancel
}: UserCreateFormProps) {
    const handleSubmit = (values: CreateUserData) => {
        (onSubmit) && onSubmit(values);
    };

    const handleCancel = () => {
        (onCancel) && onCancel();
    };

    return (
        <Container>
            <Form<CreateUserData>
                name="basic"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item>
                    <Title level={5}>
                        User Credentials
                    </Title>
                </Form.Item>

                <Form.Item<UserRole>
                    label="Role"
                    name="role"
                >
                    <RadioInput<UserRole>
                        options={[
                            { key: "ADMIN", label: "Admin" },
                            { key: "MANAGER", label: "Manager" },
                            { key: "MEMBER", label: "Member" },
                        ]}
                    />
                </Form.Item>

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
                    label="E-mail Address"
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                        { type: "email", message: "The input is not valid E-mail!" }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Please input your password!" },
                        { min: 6, message: "Password must be at least 6 characters long." }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<string>
                    label="Confirm Password"
                    name="passwordConfirmation"
                    rules={[
                        { required: true, message: "Please confirm your password!" },
                        { min: 6, message: "Password must be at least 6 characters long." },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Container
                        style={{
                            textAlign: "center",
                            display: "flex",
                            gap: "8px",
                            justifyContent: "center",
                        }}
                    >
                        <SubmitButton>
                            Save
                        </SubmitButton>

                        <CancelButton
                            onClick={handleCancel}
                        />
                    </Container>
                </Form.Item>

            </Form>
        </Container>
    );
}
