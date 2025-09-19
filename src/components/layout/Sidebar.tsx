'use client';
import React, { useState } from 'react';
import { Layout, Menu, Button, Avatar } from 'antd';
import {
  DashboardOutlined,
  FunnelPlotOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation';

import type { GetProp, MenuProps } from 'antd';

type MenuTheme = GetProp<MenuProps, 'theme'>;

type MenuItem = GetProp<MenuProps, 'items'>[number];

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const [theme, setTheme] = useState<MenuTheme>('light');

  const styleIcon = { fontSize: '20px' };

  const menuItems: MenuItem[] = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined style={styleIcon} />,
      label: 'Dashboard',
    },
    {
      key: 'supplier-management',
      icon: <UserOutlined />,
      label: 'Supplier Management',
      children: [
        {
          key: '/supplier-management',
          label: 'Dashboard',
        },
        {
          key: '/supplier-management/supplier-list',
          label: 'Supplier List',
        },
        {
          key: '/supplier-management/review-approvals',
          label: 'Review & Approvals',
        },
        {
          key: '/supplier-management/configurations',
          label: 'Configurations',
        },
      ],
    },
    {
      key: '/funnel-management',
      icon: <FunnelPlotOutlined />,
      label: 'Funnel Management',
      children: []
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key.startsWith('/')) {
      router.push(key);
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={280}
      theme={theme}
      className="fixed top-0 left-0 bottom-0 h-screen"
    >
      {/* Logo Section */}
      <div className={`
        h-16 flex items-center border-b border-gray-200 transition-all duration-200 justify-start px-6
      `}>
        <div className="flex items-center text-xl font-bold text-primary">
          <div className="w-8 h-8 rounded-full bg-primary text-gradient flex items-center justify-center mr-3 text-base">
            A
          </div>
          {!collapsed && (
            <span className="text-gradient font-bold tracking-wide">
              ALISA
            </span>
          )}
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex-1 overflow-auto py-4 h-[calc(100vh-64px-114px)]">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          theme={theme}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 space-y-2 mt-auto">
        <div className={`
          flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200
          ${collapsed ? 'justify-center' : 'justify-start'}
        `}>
          {!collapsed && <><QuestionCircleOutlined /><span>Help & Support</span></>}
        </div>

        <div className={`
          flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200
          ${collapsed ? 'justify-center' : 'justify-start'}
        `}>
          {/* <Avatar size="small" className="flex-shrink-0">
            JD
          </Avatar> */}
          <UserOutlined />
          {!collapsed && (
            <div className='flex-1 flex justify-between'>
              <span className="block text-sm font-medium text-red-600 truncate">
                John Doe
              </span>
              <LogoutOutlined twoToneColor="#eb2f96" className='justify-self-end'/>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Button */}
      {/* <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 -right-4 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
      /> */}
    </Sider>
  );
};

export default Sidebar;