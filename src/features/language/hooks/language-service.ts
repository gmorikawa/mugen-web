import type { ID } from "@shared/entity/types/id";

import { useSession } from "@features/auth/hooks/session";
import type { Language, NewLanguage } from "@features/language/types/language";
import {
    createLanguage,
    deleteLanguage,
    getLanguageById,
    getLanguages,
    updateLanguage
} from "@features/language/utils/api";

export interface LanguageService {
    getAll(): Promise<Language[]>;
    getById(id: ID): Promise<Language>;
    create(language: NewLanguage): Promise<Language>;
    update(language: Language): Promise<Language>;
    delete(language: Language): Promise<boolean>;
}

export function useLanguageService(): LanguageService {
    const { session } = useSession();

    if (!session) {
        throw new Error("No session available");
    }

    return {
        getAll: async () => getLanguages(session),
        getById: async (id: ID) => getLanguageById(session, id),
        create: async (language: NewLanguage) => createLanguage(session, language),
        update: async (language: Language) => updateLanguage(session, language.id, language),
        delete: async (language: Language) => deleteLanguage(session, language.id)
    }
}
