'use client';
import React, { useState } from 'react';
import { 
  Card, 
  Table, 
  Button, 
  Space, 
  Tag, 
  Row, 
  Col, 
  Tabs,
  Badge,
  Avatar,
  Tooltip,
  Select,
  DatePicker
} from 'antd';
import { 
  CheckOutlined, 
  CloseOutlined, 
  EyeOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

interface ApprovalRequest {
  id: string;
  supplierName: string;
  requestType: string;
  submittedBy: string;
  submittedDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  priority: 'High' | 'Medium' | 'Low';
  description: string;
}

const mockApprovalData: ApprovalRequest[] = [
  {
    id: '1',
    supplierName: 'PT Setroom Indonesia',
    requestType: 'New Registration',
    submittedBy: 'Albert Einstein',
    submittedDate: '2025-01-15',
    status: 'Pending',
    priority: 'High',
    description: 'New supplier registration request'
  },
  {
    id: '2',
    supplierName: 'PT Suka Suka',
    requestType: 'Profile Update',
    submittedBy: 'James Lee',
    submittedDate: '2025-01-14',
    status: 'Pending',
    priority: 'Medium',
    description: 'Update contact information'
  },
  {
    id: '3',
    supplierName: 'PT Angin Ribut',
    requestType: 'Reactivation',
    submittedBy: 'Maria Chen',
    submittedDate: '2025-01-13',
    status: 'Approved',
    priority: 'Low',
    description: 'Request to reactivate blocked supplier'
  }
];

export default function ReviewApprovalsPage() {
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'warning';
      case 'Approved': return 'success';
      case 'Rejected': return 'error';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return '#ff4d4f';
      case 'Medium': return '#faad14';
      case 'Low': return '#52c41a';
      default: return '#d9d9d9';
    }
  };

  const columns: ColumnsType<ApprovalRequest> = [
    {
      title: 'Supplier Name',
      dataIndex: 'supplierName',
      key: 'supplierName',
      render: (text) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar size="small" icon={<UserOutlined />} style={{ marginRight: 8 }} />
          {text}
        </div>
      ),
    },
    {
      title: 'Request Type',
      dataIndex: 'requestType',
      key: 'requestType',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority) => (
        <Tag color={getPriorityColor(priority)}>{priority}</Tag>
      ),
    },
    {
      title: 'Submitted By',
      dataIndex: 'submittedBy',
      key: 'submittedBy',
    },
    {
      title: 'Date',
      dataIndex: 'submittedDate',
      key: 'submittedDate',
      render: (date) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CalendarOutlined style={{ marginRight: 4, color: '#666' }} />
          {date}
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag 
          color={getStatusColor(status)}
          icon={status === 'Pending' ? <ClockCircleOutlined /> : null}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Tooltip title="View Details">
            <Button type="text" icon={<EyeOutlined />} size="small" />
          </Tooltip>
          {record.status === 'Pending' && (
            <>
              <Tooltip title="Approve">
                <Button 
                  type="text" 
                  icon={<CheckOutlined />} 
                  size="small"
                  style={{ color: '#52c41a' }}
                  onClick={() => handleApprove(record.id)}
                />
              </Tooltip>
              <Tooltip title="Reject">
                <Button 
                  type="text" 
                  icon={<CloseOutlined />} 
                  size="small"
                  style={{ color: '#ff4d4f' }}
                  onClick={() => handleReject(record.id)}
                />
              </Tooltip>
            </>
          )}
        </Space>
      ),
    },
  ];

  const handleApprove = (id: string) => {
    console.log('Approve:', id);
  };

  const handleReject = (id: string) => {
    console.log('Reject:', id);
  };

  const handleBulkApprove = () => {
    console.log('Bulk approve:', selectedRows);
  };

  const handleBulkReject = () => {
    console.log('Bulk reject:', selectedRows);
  };

  const filteredData = mockApprovalData.filter(item => {
    if (activeTab === 'pending') return item.status === 'Pending';
    if (activeTab === 'approved') return item.status === 'Approved';
    if (activeTab === 'rejected') return item.status === 'Rejected';
    return true;
  });

  const pendingCount = mockApprovalData.filter(item => item.status === 'Pending').length;
  const approvedCount = mockApprovalData.filter(item => item.status === 'Approved').length;
  const rejectedCount = mockApprovalData.filter(item => item.status === 'Rejected').length;

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <h1 style={{ fontSize: 24, margin: 0 }}>Review & Approvals</h1>
        </Col>
        <Col>
          <Space>
            <RangePicker />
            <Select defaultValue="all" style={{ width: 120 }}>
              <Select.Option value="all">All Types</Select.Option>
              <Select.Option value="registration">Registration</Select.Option>
              <Select.Option value="update">Update</Select.Option>
            </Select>
          </Space>
        </Col>
      </Row>

      <Card>
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane 
            tab={
              <Badge count={pendingCount} offset={[10, 0]}>
                <span>Pending Approval</span>
              </Badge>
            } 
            key="pending"
          />
          <TabPane 
            tab={
              <Badge count={approvedCount} offset={[10, 0]} color="green">
                <span>Approved</span>
              </Badge>
            } 
            key="approved"
          />
          <TabPane 
            tab={
              <Badge count={rejectedCount} offset={[10, 0]} color="red">
                <span>Rejected</span>
              </Badge>
            } 
            key="rejected"
          />
        </Tabs>

        {selectedRows.length > 0 && (
          <div style={{ marginBottom: 16, padding: 16, background: '#f0f2f5', borderRadius: 6 }}>
            <Space>
              <span>{selectedRows.length} items selected</span>
              <Button 
                type="primary" 
                icon={<CheckOutlined />} 
                onClick={handleBulkApprove}
                disabled={activeTab !== 'pending'}
              >
                Bulk Approve
              </Button>
              <Button 
                danger 
                icon={<CloseOutlined />} 
                onClick={handleBulkReject}
                disabled={activeTab !== 'pending'}
              >
                Bulk Reject
              </Button>
            </Space>
          </div>
        )}

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: selectedRows,
            onChange: (selectedRowKeys, selectedRows) => setSelectedRows(selectedRows.map(row => row.id)),
          }}
          pagination={{
            showSizeChanger: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
        />
      </Card>
    </div>
  );
}