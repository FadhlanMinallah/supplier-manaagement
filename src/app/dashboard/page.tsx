'use client';
import React from 'react';
import { Card, Row, Col } from 'antd';

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>Dashboard</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Total Suppliers" variant="borderless">
            <p>Content will be added here</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Active Suppliers" variant="borderless">
            <p>Content will be added here</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Pending Approvals" variant="borderless">
            <p>Content will be added here</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}