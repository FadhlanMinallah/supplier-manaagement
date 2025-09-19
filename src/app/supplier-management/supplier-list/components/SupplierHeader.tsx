import React from 'react';
import { Button, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface SupplierHeaderProps {
  onNewSupplier: () => void;
}

const SupplierHeader: React.FC<SupplierHeaderProps> = ({ onNewSupplier }) => {
  return (
    <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <Title level={3} style={{ margin: 0, fontWeight: 500 }}>Supplier List</Title>
        <Button onClick={onNewSupplier} type="primary" icon={<UserAddOutlined />} size="large">
          New Supplier
        </Button>
      </div>
  );
}

export default SupplierHeader;