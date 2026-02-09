import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { AuthLayout } from "@layout/auth-layout";
import { AppLayout } from "@layout/app-layout";

import { LoginPage } from "@features/auth/pages/login";
import { SystemSetupPage } from "@features/auth/pages/system-setup";
import { EmailConfirmationPage } from "@features/auth/pages/email-confirmation";

import { UserListPage } from "@features/user/pages/list";
import { UserCreateFormPage } from "@features/user/pages/create-form";
import { UserUpdateFormPage } from "@features/user/pages/update-form";

import { LanguageListPage } from "@features/language/pages/list";
import { LanguageCreateFormPage } from "@features/language/pages/create-form";
import { LanguageUpdateFormPage } from "@features/language/pages/update-form";
import { CountryListPage } from "@features/country/pages/list";
import { CountryCreateFormPage } from "@features/country/pages/create-form";
import { CountryUpdateFormPage } from "@features/country/pages/update-form";
import { CategoryListPage } from "@features/category/pages/list";
import { CategoryCreateFormPage } from "@features/category/pages/create-form";
import { CategoryUpdateFormPage } from "@features/category/pages/update-form";
import { ColorEncodingListPage } from "@features/color-encoding/pages/list";
import { ColorEncodingCreateFormPage } from "@features/color-encoding/pages/create-form";
import { ColorEncodingUpdateFormPage } from "@features/color-encoding/pages/update-form";
import { CompanyListPage } from "@features/company/pages/list";
import { CompanyCreateFormPage } from "@features/company/pages/create-form";
import { CompanyUpdateFormPage } from "@features/company/pages/update-form";
import { PlatformListPage } from "@features/platform/pages/list";
import { PlatformCreateFormPage } from "@features/platform/pages/create-form";
import { PlatformUpdateFormPage } from "@features/platform/pages/update-form";

export function RouteProvider() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/login" />} />

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/system-setup" element={<SystemSetupPage />} />
                    <Route path="/email-confirmation" element={<EmailConfirmationPage />} />
                </Route>

                <Route path="app" element={<AppLayout />}>
                    <Route path="user/list" element={<UserListPage />} />
                    <Route path="user/form" element={<UserCreateFormPage />} />
                    <Route path="user/form/:id" element={<UserUpdateFormPage />} />

                    <Route path="language/list" element={<LanguageListPage />} />
                    <Route path="language/form" element={<LanguageCreateFormPage />} />
                    <Route path="language/form/:id" element={<LanguageUpdateFormPage />} />

                    <Route path="country/list" element={<CountryListPage />} />
                    <Route path="country/form" element={<CountryCreateFormPage />} />
                    <Route path="country/form/:id" element={<CountryUpdateFormPage />} />

                    <Route path="category/list" element={<CategoryListPage />} />
                    <Route path="category/form" element={<CategoryCreateFormPage />} />
                    <Route path="category/form/:id" element={<CategoryUpdateFormPage />} />

                    <Route path="color-encoding/list" element={<ColorEncodingListPage />} />
                    <Route path="color-encoding/form" element={<ColorEncodingCreateFormPage />} />
                    <Route path="color-encoding/form/:id" element={<ColorEncodingUpdateFormPage />} />

                    <Route path="company/list" element={<CompanyListPage />} />
                    <Route path="company/form" element={<CompanyCreateFormPage />} />
                    <Route path="company/form/:id" element={<CompanyUpdateFormPage />} />

                    <Route path="platform/list" element={<PlatformListPage />} />
                    <Route path="platform/form" element={<PlatformCreateFormPage />} />
                    <Route path="platform/form/:id" element={<PlatformUpdateFormPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
