import { Form, Input } from "antd";

import { CancelButton } from "@shared/form/components/cancel-button";

import { Container } from "@components/container/container";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { LanguageFormData } from "@features/language/types/form";

export interface LanguageFormProps {
    initialValues?: LanguageFormData;

    onSubmit?: (data: LanguageFormData) => void;
    onCancel?: () => void;
}

export function LanguageForm({
    initialValues,

    onSubmit,
    onCancel
}: LanguageFormProps) {
    const handleSubmit = (values: LanguageFormData) => {
        (onSubmit) && onSubmit(values);
    };

    const handleCancel = () => {
        (onCancel) && onCancel();
    };

    return (
        <Container>
            <Form<LanguageFormData>
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
                        Language Information
                    </Title>
                </Form.Item>

                <Form.Item<string>
                    label="Language"
                    name="name"
                    rules={[
                        { required: true, message: "Please input the language name!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="ISO Code"
                    name="isoCode"
                    rules={[
                        { required: true, message: "Please input the ISO code!" },
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
