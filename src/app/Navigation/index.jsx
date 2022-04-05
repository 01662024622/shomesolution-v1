import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';
import logoIcon from '@/style/images/logo.jpg';
import logoText from '@/style/images/logo-text-1.jpg';

import {
  DesktopOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  BankOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Navigation() {
  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <>
      <Sider collapsible collapsed={isNavMenuClose} onCollapse={onCollapse} className="navigation">
        <div className="logo">
          <img
            src={logoIcon}
            alt="Logo"
            style={{ width: "41px", height: "41px" }}
          />

          {!showLogoApp && (
            <img src={logoText} alt="Logo" style={{ marginTop: '3px', marginLeft: '10px', width: "100px", height: "auto"}} />
          )}
        </div>
        <Menu mode="inline">
          <Menu.Item key={'Tổng quátDashboard'} icon={<DashboardOutlined />}>
            <Link to={'/'} />
            Tổng quát
          </Menu.Item>
          <Menu.Item key={'Customer'} icon={<CustomerServiceOutlined />}>
            <Link to={'/customer'} />
            Khách hàng
          </Menu.Item>
          <Menu.Item key={'Invoice'} icon={<FileTextOutlined />}>
            <Link to={'/invoice'} />
            Đơn hàng
          </Menu.Item>
          <Menu.Item key={'Quote'} icon={<FileSyncOutlined />}>
            <Link to={'/quote'} />
            Trích dẫn
          </Menu.Item>
          <Menu.Item key={'Payment Invoice'} icon={<CreditCardOutlined />}>
            <Link to={'/payment/invoice'} />
            Quản lý thanh toán
          </Menu.Item>
          <Menu.Item key={'Employee'} icon={<UserOutlined />}>
            <Link to={'/employee'} />
            Nhân viên
          </Menu.Item>
          <Menu.Item key={'Admin'} icon={<TeamOutlined />}>
            <Link to={'/admin'} />
            Admin
          </Menu.Item>
          <SubMenu key={'setting'} icon={<SettingOutlined />} title={'Cài đặt'}>
            <Menu.Item key={'PaymentMode'}>
              <Link to={'/payment/mode'} />
              Phương thức thanh toán
            </Menu.Item>
            <Menu.Item key={'Role'}>
              <Link to={'/role'} />
              Phân quyền
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}
