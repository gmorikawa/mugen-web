import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";

import { Viewport } from "@components/container/viewport";
import { Container } from "@components/container/container";
import { Title } from "@components/typography/title";

import { ApplicationMenu } from "./menu";

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
                    <Header
                        style={{
                            paddingLeft: "24px",
                            background: colorBgContainer,
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Title level={3}>
                            App Title
                        </Title>
                    </Header>
                    <Content style={{ margin: "24px" }}>
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
