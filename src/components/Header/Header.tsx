import { useCallback, useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [current, setCurrent] = useState('main');

  const onClickMenu = useCallback(
    (e) => {
      setCurrent(e.key);
    },
    [current],
  );

  return (
    <Menu mode="horizontal" onClick={onClickMenu} selectedKeys={[current]}>
      <Menu.Item key="main" icon={<MailOutlined />}>
        <Link to="/">전체 기사 목록</Link>
      </Menu.Item>
      <Menu.Item key="favorites" icon={<AppstoreOutlined />}>
        <Link to="/Favorite">즐겨찾기 목록</Link>
      </Menu.Item>
      <Menu.Item key="scrollEvent">
        <Link to="/ScrollEvent">무한스크롤(Scroll Event)</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
