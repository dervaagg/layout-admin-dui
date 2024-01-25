import { Menu } from "antd";
import {
  HomeOutlined,
  FileSearchOutlined,
  UserOutlined,
  FilePdfOutlined,
  ContactsOutlined,
  ReadOutlined,
  FileAddOutlined,
  FileExclamationOutlined,
  FileOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

const ListMenu = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="profil" icon={<UserOutlined />}>
        Profil
      </Menu.Item>
      <Menu.Item key="kontak" icon={<ContactsOutlined />}>
        Kontak
      </Menu.Item>
      <Menu.SubMenu key="sublayanan" icon={<FileOutlined />} title="Layanan">
        <Menu.Item key="utama" icon={<FileExclamationOutlined />}>
          Utama
        </Menu.Item>
        <Menu.Item key="tambahan" icon={<FileAddOutlined />}>
          Tambahan
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="berita" icon={<ReadOutlined />}>
        Berita
      </Menu.Item>
      <Menu.Item key="rfc" icon={<FilePdfOutlined />}>
        RFC 2350
      </Menu.Item>
      <Menu.Item key="panduan" icon={<FileSearchOutlined />}>
        Panduan
      </Menu.Item>
    </Menu>
  );
};

ListMenu.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default ListMenu;
