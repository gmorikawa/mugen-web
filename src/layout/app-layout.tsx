import { Layout, theme } from "antd";
import { Viewport } from "@components/container/viewport";
import { ApplicationMenu } from "./menu";
import { Container } from "@components/container/container";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

export function AppLayout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Viewport>
            <Layout
                style={{
                    height: "100%",
                }}
            >
                <ApplicationMenu />
                <Layout
                    style={{
                        height: "100%",
                    }}
                >
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: "24px 24px" }}>
                        <Container
                            style={{
                                padding: 24,
                                height: "100%",
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <Outlet />
                        </Container>
                    </Content>
                </Layout>
            </Layout>
        </Viewport>
    );
};
