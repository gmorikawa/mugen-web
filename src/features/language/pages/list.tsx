import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { Language } from "@features/language/types/language";
import { useNavigator } from "@shared/router/hooks/navigator";
import { LanguageCard } from "../components/language-card";
import { Container } from "@components/container/container";
import { Button } from "@components/button/button";
import { useLanguageService } from "../hooks/language-service";
import { useLanguageSearch } from "../hooks/language-search";

export function LanguageListPage() {
    useApplicationHeader(
        "Language List",
        [
            {
                label: "New",
                action: () => {
                    navigate.to("/app/language/form");
                }
            }
        ]
    );

    const service = useLanguageService();
    const languages = useLanguageSearch();
    const navigate = useNavigator();

    const handleUpdate = (language: Language) => {
        navigate.to(`/app/language/form/${language.id}`);
    };

    const handleDelete = (language: Language) => {
        service.delete(language)
            .then(() => {
                languages.refresh();
            })
            .catch((_: Error) => {
            });
    };

    return languages.data.map((language: Language) => (
        <LanguageCard
            key={language.id}
            language={language}
            actionSlot={
                <Container
                    style={{
                        display: "flex",
                        gap: "8px",
                    }}
                >
                    <Button onClick={() => handleUpdate(language)} color="primary" variant="outlined">Edit</Button>
                    <Button onClick={() => handleDelete(language)} color="danger" variant="outlined">Delete</Button>
                </Container>
            }
        />
    ));
}