import type { ID } from "@shared/entity/types/id";

import { useSession } from "@features/auth/hooks/session";
import type { Country, NewCountry } from "@features/country/types/country";
import {
    createCountry,
    deleteCountry,
    getCountryById,
    getCountries,
    updateCountry
} from "@features/country/utils/api";

export interface CountryService {
    getAll(): Promise<Country[]>;
    getById(id: ID): Promise<Country>;
    create(country: NewCountry): Promise<Country>;
    update(country: Country): Promise<Country>;
    delete(country: Country): Promise<boolean>;
}

export function useCountryService(): CountryService {
    const { session } = useSession();

    if (!session) {
        throw new Error("No session available");
    }

    return {
        getAll: async () => getCountries(session),
        getById: async (id: ID) => getCountryById(session, id),
        create: async (country: NewCountry) => createCountry(session, country),
        update: async (country: Country) => updateCountry(session, country.id, country),
        delete: async (country: Country) => deleteCountry(session, country.id)
    }
}
