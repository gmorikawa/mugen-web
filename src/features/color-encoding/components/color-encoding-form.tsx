import { Form, Input } from "antd";

import { CancelButton } from "@shared/form/components/cancel-button";

import { Container } from "@components/container/container";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { ColorEncodingFormData } from "@features/color-encoding/types/form";

export interface ColorEncodingFormProps {
    initialValues?: ColorEncodingFormData;

    onSubmit?: (data: ColorEncodingFormData) => void;
    onCancel?: () => void;
}

export function ColorEncodingForm({
    initialValues,

    onSubmit,
    onCancel
}: ColorEncodingFormProps) {
    const handleSubmit = (values: ColorEncodingFormData) => {
        (onSubmit) && onSubmit(values);
    };

    const handleCancel = () => {
        (onCancel) && onCancel();
    };

    return (
        <Container>
            <Form<ColorEncodingFormData>
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
                        Color Encoding Information
                    </Title>
                </Form.Item>

                <Form.Item<string>
                    label="Color Encoding"
                    name="name"
                    rules={[
                        { required: true, message: "Please input the color encoding name!" },
                    ]}
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
