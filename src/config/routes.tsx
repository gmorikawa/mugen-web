import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { AuthLayout } from "@layout/auth-layout";

import { LoginPage } from "@features/auth/pages/login";
import { SystemSetupPage } from "@features/auth/pages/system-setup";

export function RouteProvider() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/login" />} />

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/system-setup" element={<SystemSetupPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
