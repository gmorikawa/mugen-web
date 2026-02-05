import { Container } from "@components/container/container";
import { Title } from "@components/typography/title";
import { Form, Input } from "antd";
import type { UserRole } from "../types/enums";
import { RadioInput } from "@components/form/radio-input";
import { SubmitButton } from "@components/button/submit-button";
import type { User } from "../types/user";

export interface UserFormProps<Entity> {
    user: User;

    onSubmit?: (data: Entity) => void;
}

export function UserForm<Entity>({
    user,

    onSubmit
}: UserFormProps<Entity>) {
    const handleFinish = (values: Entity) => {
        if (onSubmit) {
            onSubmit(values);
        }
    };

    return (
        <Container>
            <Form
                name="basic"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{
                    ...user
                }}
                onFinish={handleFinish}
                autoComplete="off"
            >
                <Form.Item>
                    <Title level={5}>
                        User Profile
                    </Title>
                </Form.Item>

                <Form.Item<string>
                    label="Full Name"
                    name={["profile", "fullname"]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Biography"
                    name={["profile", "biography"]}
                >
                    <Input.TextArea />
                </Form.Item>

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

                <Form.Item
                    style={{ textAlign: "center" }}
                >
                    <SubmitButton>
                        Save
                    </SubmitButton>
                </Form.Item>

            </Form>
        </Container>
    );
}
