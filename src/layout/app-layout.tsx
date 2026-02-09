import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";

import { HeaderContext, HeaderProvider, type ApplicationAction } from "@shared/application/components/header-provider";

import { Button } from "@components/button/button";
import { Container } from "@components/container/container";
import { Viewport } from "@components/container/viewport";
import { Title } from "@components/typography/title";

import { ApplicationMenu } from "./menu";

const { Header, Content } = Layout;

function ApplicationContainerHeader() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const headerContext = useContext(HeaderContext);

    return (
        <Header
            style={{
                paddingLeft: "24px",
                background: colorBgContainer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Title level={3}>
                {headerContext.appTitle}
            </Title>

            <Container>
                {headerContext.actions.map((action: ApplicationAction, index: number) => (
                    <Button
                        key={index}
                        variant="link"
                        color="primary"
                        onClick={() => action.action()}
                    >
                        {action.label}
                    </Button>
                ))}
            </Container>
        </Header>
    );
}

function ApplicationContainerBody() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
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
    );
}

function ApplicationContainer() {
    return (
        <Layout
            style={{
                height: "100%",
            }}
        >
            <HeaderProvider>
                <ApplicationContainerHeader />
                <ApplicationContainerBody />
            </HeaderProvider>
        </Layout>
    );
}

export function AppLayout() {
    return (
        <Viewport>
            <Layout
                style={{
                    height: "100%",
                }}
            >
                <ApplicationMenu />
                <ApplicationContainer />
            </Layout>
        </Viewport>
    );
};
