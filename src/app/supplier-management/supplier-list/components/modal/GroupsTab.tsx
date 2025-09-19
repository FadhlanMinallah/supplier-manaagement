import React from 'react';
import { Table, Checkbox } from 'antd';
import { GroupData } from '@/types/supplier';

interface GroupsTabProps {
  data: GroupData[];
}

const GroupsTab: React.FC<GroupsTabProps> = ({ data }) => {
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 50,
    },
    {
      title: 'Group Name',
      dataIndex: 'groupName',
      key: 'groupName',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Active',
      key: 'active',
      width: 80,
      render: (record: GroupData) => (
        <Checkbox checked={record.active} />
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

export default GroupsTab;