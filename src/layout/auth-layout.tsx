import { Outlet } from "react-router-dom";

import { Viewport } from "@components/container/viewport";
import { Container } from "@components/container/container";

export function AuthLayout() {
    return (
        <Viewport>
            <Container
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",

                    padding: "8px",
                }}
            >
                <Outlet />
            </Container>
        </Viewport>
    );
}
