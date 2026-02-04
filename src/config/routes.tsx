import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { AuthLayout } from "@layout/auth-layout";

import { LoginPage } from "@features/auth/pages/login";

export function RouteProvider() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/login" />} />

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
