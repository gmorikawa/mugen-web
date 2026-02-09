import { useNavigator } from "@shared/router/hooks/navigator";
import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { CategoryFormData } from "@features/category/types/form";
import type { NewCategory } from "@features/category/types/category";
import { useSession } from "@features/auth/hooks/session";
import { createCategory } from "@features/category/utils/api";
import { CategoryForm } from "@features/category/components/category-form";

export function CategoryCreateFormPage() {
    useApplicationHeader(
        "Create Category",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/category/list");
                }
            },
        ]
    );

    const { session } = useSession();
    const navigate = useNavigator();

    const handleSubmit = (data: CategoryFormData) => {
        const newCategory: NewCategory = {
            name: data.name,
            description: data.description
        };

        createCategory(session!, newCategory)
            .then(() => {
                navigate.to("/app/category/list");
            })
            .catch((error: Error) => {
                console.error("Failed to create category:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/category/list");
    };

    return (
        <CategoryForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
