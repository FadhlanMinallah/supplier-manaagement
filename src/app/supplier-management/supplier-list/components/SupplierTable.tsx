import React from 'react';
import { Card, Table, Space, Tag } from 'antd';
import { SupplierData } from '@/types/supplier';

interface SupplierTableProps {
  data: SupplierData[];
}

const SupplierTable: React.FC<SupplierTableProps> = ({ data }) => {
  const columns = [
    {
      title: '#',
      key: 'index',
      width: 50,
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: 'Name',
      key: 'name',
      render: (record: SupplierData) => (
        <Space direction="vertical" size={0}>
          <Space>
            <div style={{
              width: 24,
              height: 24,
              backgroundColor: '#1890ff',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px'
            }}>
              📦
            </div>
            <strong>{record.name}</strong>
          </Space>
          <div style={{ color: '#666', fontSize: '12px' }}>
            {record.id} <span style={{ color: '#1890ff' }}>{record.code}</span> ({record.shortName})
          </div>
        </Space>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Status',
      key: 'status',
      render: (record: SupplierData) => {
        let color = 'default';
        if (record.status === 'Active') color = 'success';
        else if (record.status === 'In Progress') color = 'processing';
        else if (record.status === 'Blocked') color = 'error';
        
        return <Tag color={color}>{record.status}</Tag>;
      },
    },
  ];

  return (
    <Card>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          total: 1869,
          pageSize: 10,
          showTotal: (total, range) => 
            `${range[0]}-${range[1]} of ${total} suppliers`,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        rowClassName={(record, index) => {
          if (index === 0) return 'selected-row';
          return '';
        }}
      />
    </Card>
  );
};

export default SupplierTable;