import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { AuthLayout } from "@layout/auth-layout";
import { AppLayout } from "@layout/app-layout";

import { LoginPage } from "@features/auth/pages/login";
import { SystemSetupPage } from "@features/auth/pages/system-setup";
import { EmailConfirmationPage } from "@features/auth/pages/email-confirmation";

import { UserListPage } from "@features/user/pages/list";

import { LanguageListPage } from "@features/language/pages/list";
import { UserCreateFormPage } from "@features/user/pages/create-form";
import { UserUpdateFormPage } from "@features/user/pages/update-form";

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
