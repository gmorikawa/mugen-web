import { useEffect, useState } from "react";

import { useApplicationHeader } from "@shared/application/hooks/application-header";

import type { Language } from "@features/language/types/language";
import { useSession } from "@features/auth/hooks/session";
import { getLanguages } from "@features/language/utils/api";

export function LanguageListPage() {
    useApplicationHeader(
        "Language List",
        [
            
        ]
    );

    const [languages, setLanguages] = useState<Language[]>([]);
    const { session } = useSession();

    if (!session) {
        throw new Error("No session found");
    }

    useEffect(() => {
        getLanguages(session)
            .then((fetchedLanguages: Language[]) => {
                setLanguages(fetchedLanguages);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    }, []);
    return languages.map((language) => (
        <div key={language.id}>
            {language.id} - {language.name} - {language.isoCode}
        </div>
    ));
}