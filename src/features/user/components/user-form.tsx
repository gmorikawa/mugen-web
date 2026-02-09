import { Form, Input } from "antd";

import { CancelButton } from "@shared/form/components/cancel-button";

import { Container } from "@components/container/container";
import { RadioInput } from "@components/form/radio-input";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { UserRole } from "@features/user/types/enums";
import type { User } from "@features/user//types/user";
import { AvatarUploadInput } from "./avatar-upload-input";

export interface UserFormProps<Entity> {
    user: User;
    avatarUrl: string | null;

    onChangeAvatar?: (file: File | null) => void;
    onSubmit?: (data: Entity) => void;
    onCancel?: () => void;
}

export function UserForm<Entity>({
    user,
    avatarUrl,

    onChangeAvatar,
    onSubmit,
    onCancel
}: UserFormProps<Entity>) {
    const [form] = Form.useForm();

    const handleSubmit = (values: Entity) => {
        (onSubmit) && onSubmit(values);
    };

    const handleCancel = () => {
        (onCancel) && onCancel();
    };

    return (
        <Container>
            <Form
                form={form}
                name="basic"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{
                    ...user
                }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item>
                    <Title level={5}>
                        User Profile
                    </Title>
                </Form.Item>

                <Form.Item
                    label="Avatar"
                >
                    <AvatarUploadInput
                        previewUrl={avatarUrl || undefined}
                        onChange={onChangeAvatar}
                    />
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
