import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { ColorEncoding } from "@features/color-encoding/types/color-encoding";
import { useNavigator } from "@shared/router/hooks/navigator";
import { ColorEncodingCard } from "@features/color-encoding/components/color-encoding-card";
import { Container } from "@components/container/container";
import { Button } from "@components/button/button";
import { useColorEncodingService } from "@features/color-encoding/hooks/color-encoding-service";
import { useColorEncodingSearch } from "@features/color-encoding/hooks/color-encoding-search";

export function ColorEncodingListPage() {
    useApplicationHeader(
        "Color Encoding List",
        [
            {
                label: "New",
                action: () => {
                    navigate.to("/app/color-encoding/form");
                }
            }
        ]
    );

    const service = useColorEncodingService();
    const colorEncodings = useColorEncodingSearch();
    const navigate = useNavigator();

    const handleUpdate = (colorEncoding: ColorEncoding) => {
        navigate.to(`/app/color-encoding/form/${colorEncoding.id}`);
    };

    const handleDelete = (colorEncoding: ColorEncoding) => {
        service.delete(colorEncoding)
            .then(() => {
                colorEncodings.refresh();
            })
            .catch((_: Error) => {
            });
    };

    return colorEncodings.data.map((colorEncoding: ColorEncoding) => (
        <ColorEncodingCard
            key={colorEncoding.id}
            colorEncoding={colorEncoding}
            actionSlot={
                <Container
                    style={{
                        display: "flex",
                        gap: "8px",
                    }}
                >
                    <Button onClick={() => handleUpdate(colorEncoding)} color="primary" variant="outlined">Edit</Button>
                    <Button onClick={() => handleDelete(colorEncoding)} color="danger" variant="outlined">Delete</Button>
                </Container>
            }
        />
    ));
}
