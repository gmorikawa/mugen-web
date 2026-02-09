import type { ID } from "@shared/entity/types/id";
import { useApplicationHeader } from "@shared/application/hooks/application-header";
import { useNavigator } from "@shared/router/hooks/navigator";
import { useParams } from "@shared/router/hooks/params";

import type { Category } from "@features/category/types/category";
import type { CategoryFormData } from "@features/category/types/form";
import { useCategoryService } from "@features/category/hooks/category-service";
import { useCategoryEntity } from "@features/category/hooks/category-entity";
import { CategoryForm } from "@features/category/components/category-form";

type ParamsWithId = {
    id: ID;
};

export function CategoryUpdateFormPage() {
    useApplicationHeader(
        "Update Category",
        [
            {
                label: "Back",
                action: () => {
                    navigate.to("/app/category/list");
                }
            },
        ]
    );

    const { id } = useParams<ParamsWithId>();
    const navigate = useNavigator();
    const service = useCategoryService();
    const category = useCategoryEntity(id);

    const handleSubmit = (data: CategoryFormData) => {
        const updatedCategory: Category = {
            id: id,
            name: data.name,
            description: data.description
        };

        service.update(updatedCategory)
            .then(() => {
                navigate.to("/app/category/list");
            })
            .catch((error: Error) => {
                console.error("Failed to update category:", error);
            });
    };

    const handleCancel = () => {
        navigate.to("/app/category/list");
    };

    return (category.entity) && (
        <CategoryForm
            initialValues={{
                name: category.entity.name,
                description: category.entity.description
            }}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
}
