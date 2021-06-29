import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="main" icon={<MailOutlined />}>
        메인이동
      </Menu.Item>
      <Menu.Item key="favorites" icon={<AppstoreOutlined />}>
        즐겨찾기 목록확인
      </Menu.Item>
    </Menu>
  );
};

export default Header;
