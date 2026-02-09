import { Form, Input } from "antd";

import { CancelButton } from "@shared/form/components/cancel-button";

import { Container } from "@components/container/container";
import { RadioInput } from "@components/form/radio-input";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { PlatformFormData } from "@features/platform/types/form";
import type { PlatformType } from "@features/platform/types/enums";

export interface PlatformFormProps {
    initialValues?: PlatformFormData;

    onSubmit?: (data: PlatformFormData) => void;
    onCancel?: () => void;
}

export function PlatformForm({
    initialValues,

    onSubmit,
    onCancel
}: PlatformFormProps) {
    const handleSubmit = (values: PlatformFormData) => {
        (onSubmit) && onSubmit(values);
    };

    const handleCancel = () => {
        (onCancel) && onCancel();
    };

    return (
        <Container>
            <Form<PlatformFormData>
                name="basic"
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={initialValues}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item>
                    <Title level={5}>
                        Platform Information
                    </Title>
                </Form.Item>

                <Form.Item<string>
                    label="Platform"
                    name="name"
                    rules={[
                        { required: true, message: "Please input the platform name!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Abbreviation"
                    name="abbreviation"
                    rules={[
                        { required: true, message: "Please input the abbreviation!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<PlatformType>
                    label="Type"
                    name="type"
                >
                    <RadioInput<PlatformType>
                        options={[
                            { key: "HOME", label: "Home" },
                            { key: "PORTABLE", label: "Portable" },
                            { key: "HYBRID", label: "Hybrid" },
                        ]}
                    />
                </Form.Item>

                <Form.Item<string>
                    label="Developer"
                    name="developer"
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Manufacturer"
                    name="manufacturer"
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Description"
                    name="description"
                >
                    <Input.TextArea />
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
