import React from 'react';
import { Table, Button, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ContactData } from '@/types/supplier';

interface ContactsTabProps {
  data: ContactData[];
}

const ContactsTab: React.FC<ContactsTabProps> = ({ data }) => {
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
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Job Position',
      dataIndex: 'jobPosition',
      key: 'jobPosition',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Main',
      key: 'main',
      width: 80,
      render: (record: ContactData) => (
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

export default ContactsTab;