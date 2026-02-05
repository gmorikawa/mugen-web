import { useNavigator } from "@shared/router/hooks/navigator";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

export function ApplicationMenu() {
    const navigate = useNavigator();

    const onClick = (path: string) => {
        navigate.to(path);
    };

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                    { key: "1", icon: null, label: "Users", onClick: () => onClick("/app/user/list") },
                    { key: "2", icon: null, label: "Languages", onClick: () => onClick("/app/language/list") },
                ]}
            />
        </Sider>
    );
}
