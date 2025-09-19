import React from 'react';
import { Table, Button, Space, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AddressData } from '@/types/supplier';

interface AddressTabProps {
  data: AddressData[];
}

const AddressTab: React.FC<AddressTabProps> = ({ data }) => {
  const columns = [
    {
      title: '',
      key: 'action',
      width: 40,
      render: () => (
        <Button 
          type="primary" 
          shape="circle" 
          icon={<PlusOutlined />} 
          size="small"
          style={{ backgroundColor: '#1890ff' }}
        />
      ),
    },
    {
      title: 'Name',
      key: 'name',
      render: (record: AddressData) => (
        <Space>
          <span style={{ fontSize: '16px' }}>{record.icon}</span>
          {record.name}
        </Space>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Main',
      key: 'main',
      width: 80,
      render: (record: AddressData) => (
        <Radio checked={record.isMain} />
      ),
    },
  ];

  return (
    <div style={{ 
      border: '1px solid #d9d9d9',
      borderRadius: '6px',
      overflow: 'hidden'
    }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader={true}
        size="middle"
      />
    </div>
  );
};

export default AddressTab;