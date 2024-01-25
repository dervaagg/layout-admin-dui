// import { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "./Logo";
import ListMenu from "./ListMenu";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import { LeftSquareFilled, RightSquareFilled } from "@ant-design/icons";

const { Header, Sider } = Layout;
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
      >
        <Logo />
        <ListMenu darkTheme={darkTheme} />
        <ToggleButton
          className="sb-toggle"
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <RightSquareFilled className="toggle-close"/> : <LeftSquareFilled className="toggle-open" />}
          />
        </Header>
      </Layout>
    </Layout>
  );
}
export default App;
