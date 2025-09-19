import React from 'react';
import { Card, Statistic, Row, Col } from 'antd';
import {
  UserOutlined,
  UserAddOutlined,
  DollarOutlined,
  StopOutlined
} from '@ant-design/icons';

const SupplierStats = () => {
  const statsData = [
    {
      title: 'Total Supplier',
      value: 1869,
      icon: <UserOutlined style={{ color: '#666' }} />,
      trend: { text: '+8% vs last year', color: '#52c41a', icon: '📈' }
    },
    {
      title: 'New Supplier',
      value: 27,
      icon: <UserAddOutlined style={{ color: '#666' }} />,
      trend: { text: '+1% vs Last Year', color: '#52c41a', icon: '📈' }
    },
    {
      title: 'Avg Cost per Supplier',
      value: 'Rp 320,3 Mn',
      icon: <DollarOutlined style={{ color: '#666' }} />,
      trend: { text: '-1% vs Last Year', color: '#f5222d', icon: '📉' }
    },
    {
      title: 'Blocked Supplier',
      value: 31,
      icon: <StopOutlined style={{ color: '#666' }} />,
      trend: { text: '-4% vs Last Year', color: '#52c41a', icon: '📈' }
    }
  ];

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
      {statsData.map((stat, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <Card>
            <Statistic
              title={stat.title}
              value={stat.value}
              prefix={stat.icon}
              suffix={
                <div style={{ 
                  fontSize: '12px', 
                  color: stat.trend.color, 
                  marginTop: '4px' 
                }}>
                  {stat.trend.icon} {stat.trend.text}
                </div>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SupplierStats;