import { Form, Input } from "antd";

import { CancelButton } from "@shared/form/components/cancel-button";

import { Container } from "@components/container/container";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { CompanyFormData } from "@features/company/types/form";

export interface CompanyFormProps {
    initialValues?: CompanyFormData;

    onSubmit?: (data: CompanyFormData) => void;
    onCancel?: () => void;
}

export function CompanyForm({
    initialValues,

    onSubmit,
    onCancel
}: CompanyFormProps) {
    const handleSubmit = (values: CompanyFormData) => {
        (onSubmit) && onSubmit(values);
    };

    const handleCancel = () => {
        (onCancel) && onCancel();
    };

    return (
        <Container>
            <Form<CompanyFormData>
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
                        Company Information
                    </Title>
                </Form.Item>

                <Form.Item<string>
                    label="Company"
                    name="name"
                    rules={[
                        { required: true, message: "Please input the company name!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Country"
                    name="country"
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
