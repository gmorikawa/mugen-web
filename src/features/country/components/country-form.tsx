import { Form, Input } from "antd";

import { CancelButton } from "@shared/form/components/cancel-button";

import { Container } from "@components/container/container";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { CountryFormData } from "@features/country/types/form";

export interface CountryFormProps {
    initialValues?: CountryFormData;

    onSubmit?: (data: CountryFormData) => void;
    onCancel?: () => void;
}

export function CountryForm({
    initialValues,

    onSubmit,
    onCancel
}: CountryFormProps) {
    const handleSubmit = (values: CountryFormData) => {
        (onSubmit) && onSubmit(values);
    };

    const handleCancel = () => {
        (onCancel) && onCancel();
    };

    return (
        <Container>
            <Form<CountryFormData>
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
                        Country Information
                    </Title>
                </Form.Item>

                <Form.Item<string>
                    label="Country"
                    name="name"
                    rules={[
                        { required: true, message: "Please input the country name!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Flag"
                    name="flag"
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
