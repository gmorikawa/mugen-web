import type { ID } from "@shared/entity/types/id";

import { useSession } from "@features/auth/hooks/session";
import type { Company, NewCompany } from "@features/company/types/company";
import {
    createCompany,
    deleteCompany,
    getCompanyById,
    getCompanies,
    updateCompany
} from "@features/company/utils/api";

export interface CompanyService {
    getAll(): Promise<Company[]>;
    getById(id: ID): Promise<Company>;
    create(company: NewCompany): Promise<Company>;
    update(company: Company): Promise<Company>;
    delete(company: Company): Promise<boolean>;
}

export function useCompanyService(): CompanyService {
    const { session } = useSession();

    if (!session) {
        throw new Error("No session available");
    }

    return {
        getAll: async () => getCompanies(session),
        getById: async (id: ID) => getCompanyById(session, id),
        create: async (company: NewCompany) => createCompany(session, company),
        update: async (company: Company) => updateCompany(session, company.id, company),
        delete: async (company: Company) => deleteCompany(session, company.id)
    }
}
