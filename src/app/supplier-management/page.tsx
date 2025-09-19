'use client';
import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default function SupplierManagementDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>Supplier Management Dashboard</h1>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Supplier"
              value={1869}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="+8% vs last year"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="New Supplier"
              value={27}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="+1% vs Last Year"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Avg Cost per Supplier"
              value="Rp 320,3 Mn"
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="-1% vs Last Year"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Blocked Supplier"
              value={31}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowDownOutlined />}
              suffix="-4% vs Last Year"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}