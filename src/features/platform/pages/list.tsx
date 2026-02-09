import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { Platform } from "@features/platform/types/platform";
import { useNavigator } from "@shared/router/hooks/navigator";
import { PlatformCard } from "@features/platform/components/platform-card";
import { Container } from "@components/container/container";
import { Button } from "@components/button/button";
import { usePlatformService } from "@features/platform/hooks/platform-service";
import { usePlatformSearch } from "@features/platform/hooks/platform-search";

export function PlatformListPage() {
    useApplicationHeader(
        "Platform List",
        [
            {
                label: "New",
                action: () => {
                    navigate.to("/app/platform/form");
                }
            }
        ]
    );

    const service = usePlatformService();
    const platforms = usePlatformSearch();
    const navigate = useNavigator();

    const handleUpdate = (platform: Platform) => {
        navigate.to(`/app/platform/form/${platform.id}`);
    };

    const handleDelete = (platform: Platform) => {
        service.delete(platform)
            .then(() => {
                platforms.refresh();
            })
            .catch((_: Error) => {
            });
    };

    return platforms.data.map((platform: Platform) => (
        <PlatformCard
            key={platform.id}
            platform={platform}
            actionSlot={
                <Container
                    style={{
                        display: "flex",
                        gap: "8px",
                    }}
                >
                    <Button onClick={() => handleUpdate(platform)} color="primary" variant="outlined">Edit</Button>
                    <Button onClick={() => handleDelete(platform)} color="danger" variant="outlined">Delete</Button>
                </Container>
            }
        />
    ));
}
