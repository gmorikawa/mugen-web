import { Form, Input } from "antd";

import { CancelButton } from "@shared/form/components/cancel-button";

import { Container } from "@components/container/container";
import { SubmitButton } from "@components/button/submit-button";
import { Title } from "@components/typography/title";

import type { CategoryFormData } from "@features/category/types/form";

export interface CategoryFormProps {
    initialValues?: CategoryFormData;

    onSubmit?: (data: CategoryFormData) => void;
    onCancel?: () => void;
}

export function CategoryForm({
    initialValues,

    onSubmit,
    onCancel
}: CategoryFormProps) {
    const handleSubmit = (values: CategoryFormData) => {
        (onSubmit) && onSubmit(values);
    };

    const handleCancel = () => {
        (onCancel) && onCancel();
    };

    return (
        <Container>
            <Form<CategoryFormData>
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
                        Category Information
                    </Title>
                </Form.Item>

                <Form.Item<string>
                    label="Category"
                    name="name"
                    rules={[
                        { required: true, message: "Please input the category name!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Description"
                    name="description"
                    rules={[
                        { required: true, message: "Please input the category description!" },
                    ]}
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
