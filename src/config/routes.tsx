import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { AuthLayout } from "@layout/auth-layout";
import { AppLayout } from "@layout/app-layout";

import { LoginPage } from "@features/auth/pages/login";
import { SystemSetupPage } from "@features/auth/pages/system-setup";

import { UserListPage } from "@features/user/pages/list";

import { LanguageListPage } from "@features/language/pages/list";

export function RouteProvider() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/login" />} />

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/system-setup" element={<SystemSetupPage />} />
                </Route>

                <Route path="app" element={<AppLayout />}>
                    <Route path="user/list" element={<UserListPage />} />

                    <Route path="language/list" element={<LanguageListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
