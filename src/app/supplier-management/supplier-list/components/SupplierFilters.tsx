import React from 'react';
import { Input, Select, Button, Space, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  SearchOutlined,
  ExportOutlined,
  AppstoreOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const SupplierFilters = () => {
  const viewMenuItems: MenuProps['items'] = [
    {
      key: 'grid',
      icon: <AppstoreOutlined />,
      label: 'Grid View',
    },
    {
      key: 'list',
      icon: <UnorderedListOutlined />,
      label: 'List View',
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('View changed to:', e.key);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      <Space>
        <Search
          placeholder="Search Customer"
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
        />
        <Select defaultValue="Active" style={{ width: 120 }}>
          <Option value="Active">Active</Option>
          <Option value="In Progress">In Progress</Option>
          <Option value="Blocked">Blocked</Option>
          <Option value="All">All</Option>
        </Select>
      </Space>
      
      <Space>
        <Button icon={<ExportOutlined />}>Export</Button>
        <Dropdown 
          menu={{ items: viewMenuItems, onClick: handleMenuClick }}
          placement="bottomRight"
        >
          <Button icon={<AppstoreOutlined />} />
        </Dropdown>
        <Button icon={<UnorderedListOutlined />} type="primary" />
      </Space>
    </div>
  );
};

export default SupplierFilters;