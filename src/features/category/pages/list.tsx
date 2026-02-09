import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { Category } from "@features/category/types/category";
import { useNavigator } from "@shared/router/hooks/navigator";
import { CategoryCard } from "@features/category/components/category-card";
import { Container } from "@components/container/container";
import { Button } from "@components/button/button";
import { useCategoryService } from "@features/category/hooks/category-service";
import { useCategorySearch } from "@features/category/hooks/category-search";

export function CategoryListPage() {
    useApplicationHeader(
        "Category List",
        [
            {
                label: "New",
                action: () => {
                    navigate.to("/app/category/form");
                }
            }
        ]
    );

    const service = useCategoryService();
    const categories = useCategorySearch();
    const navigate = useNavigator();

    const handleUpdate = (category: Category) => {
        navigate.to(`/app/category/form/${category.id}`);
    };

    const handleDelete = (category: Category) => {
        service.delete(category)
            .then(() => {
                categories.refresh();
            })
            .catch((_: Error) => {
            });
    };

    return categories.data.map((category: Category) => (
        <CategoryCard
            key={category.id}
            category={category}
            actionSlot={
                <Container
                    style={{
                        display: "flex",
                        gap: "8px",
                    }}
                >
                    <Button onClick={() => handleUpdate(category)} color="primary" variant="outlined">Edit</Button>
                    <Button onClick={() => handleDelete(category)} color="danger" variant="outlined">Delete</Button>
                </Container>
            }
        />
    ));
}
