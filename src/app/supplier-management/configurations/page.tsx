'use client';
import React, { useState } from 'react';
import { 
  Card, 
  Form, 
  Input, 
  Switch, 
  Button, 
  Space, 
  Divider, 
  Row, 
  Col, 
  Select,
  InputNumber,
  Tabs,
  Tag,
  Table,
  Modal,
  message
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined,
  SettingOutlined,
  SaveOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const { TabPane } = Tabs;
const { TextArea } = Input;

interface ConfigItem {
  id: string;
  name: string;
  value: string;
  type: 'text' | 'number' | 'boolean' | 'select';
  description: string;
  category: string;
}

interface ApprovalWorkflow {
  id: string;
  name: string;
  steps: number;
  roles: string[];
  status: 'Active' | 'Inactive';
}

const mockConfigs: ConfigItem[] = [
  {
    id: '1',
    name: 'Auto Approval Threshold',
    value: '100000',
    type: 'number',
    description: 'Maximum amount for automatic approval',
    category: 'Approval'
  },
  {
    id: '2',
    name: 'Email Notifications',
    value: 'true',
    type: 'boolean',
    description: 'Enable email notifications for approvals',
    category: 'Notifications'
  },
  {
    id: '3',
    name: 'Default Currency',
    value: 'IDR',
    type: 'select',
    description: 'Default currency for supplier transactions',
    category: 'General'
  }
];

const mockWorkflows: ApprovalWorkflow[] = [
  {
    id: '1',
    name: 'Standard Approval',
    steps: 2,
    roles: ['Manager', 'Director'],
    status: 'Active'
  },
  {
    id: '2',
    name: 'High Value Approval',
    steps: 3,
    roles: ['Manager', 'Director', 'CEO'],
    status: 'Active'
  }
];

export default function ConfigurationsPage() {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('general');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingWorkflow, setEditingWorkflow] = useState<ApprovalWorkflow | null>(null);

  const configColumns: ColumnsType<ConfigItem> = [
    {
      title: 'Configuration Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Current Value',
      dataIndex: 'value',
      key: 'value',
      render: (value, record) => {
        if (record.type === 'boolean') {
          return <Switch checked={value === 'true'} disabled />;
        }
        return value;
      },
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => <Tag>{category}</Tag>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="text" icon={<EditOutlined />} size="small" />
        </Space>
      ),
    },
  ];

  const workflowColumns: ColumnsType<ApprovalWorkflow> = [
    {
      title: 'Workflow Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Steps',
      dataIndex: 'steps',
      key: 'steps',
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      key: 'roles',
      render: (roles) => (
        <Space>
          {roles.map((role: string, index: number) => (
            <Tag key={index}>{role}</Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Active' ? 'success' : 'default'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button 
            type="text" 
            icon={<EditOutlined />} 
            size="small"
            onClick={() => handleEditWorkflow(record)}
          />
          <Button 
            type="text" 
            icon={<DeleteOutlined />} 
            size="small" 
            danger
          />
        </Space>
      ),
    },
  ];

  const handleEditWorkflow = (workflow: ApprovalWorkflow) => {
    setEditingWorkflow(workflow);
    setIsModalVisible(true);
  };

  const handleSaveConfigurations = () => {
    message.success('Configurations saved successfully!');
  };

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <h1 style={{ fontSize: 24, margin: 0 }}>Configurations</h1>
        </Col>
        <Col>
          <Space>
            <Button icon={<ReloadOutlined />}>Reset to Default</Button>
            <Button type="primary" icon={<SaveOutlined />} onClick={handleSaveConfigurations}>
              Save Changes
            </Button>
          </Space>
        </Col>
      </Row>

      <Card>
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="General Settings" key="general">
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                autoApprovalThreshold: 100000,
                emailNotifications: true,
                defaultCurrency: 'IDR',
                sessionTimeout: 30,
              }}
            >
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    label="Auto Approval Threshold"
                    name="autoApprovalThreshold"
                    help="Maximum amount for automatic approval (in IDR)"
                  >
                    <InputNumber
                      style={{ width: '100%' }}
                      formatter={(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      parser={(value) => value!.replace(/Rp\s?|(,*)/g, '')}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Session Timeout"
                    name="sessionTimeout"
                    help="Session timeout in minutes"
                  >
                    <InputNumber style={{ width: '100%' }} min={5} max={120} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    label="Default Currency"
                    name="defaultCurrency"
                  >
                    <Select>
                      <Select.Option value="IDR">Indonesian Rupiah (IDR)</Select.Option>
                      <Select.Option value="USD">US Dollar (USD)</Select.Option>
                      <Select.Option value="EUR">Euro (EUR)</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Email Notifications"
                    name="emailNotifications"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </TabPane>

          <TabPane tab="Approval Workflows" key="workflows">
            <div style={{ marginBottom: 16 }}>
              <Button 
                type="primary" 
                icon={<PlusOutlined />}
                onClick={() => setIsModalVisible(true)}
              >
                Add Workflow
              </Button>
            </div>
            
            <Table
              columns={workflowColumns}
              dataSource={mockWorkflows}
              rowKey="id"
              pagination={false}
            />
          </TabPane>

          <TabPane tab="System Settings" key="system">
            <Table
              columns={configColumns}
              dataSource={mockConfigs}
              rowKey="id"
              pagination={false}
            />
          </TabPane>
        </Tabs>
      </Card>

      <Modal
        title={editingWorkflow ? 'Edit Workflow' : 'Add New Workflow'}
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingWorkflow(null);
        }}
        footer={null}
        width={600}
      >
        <Form layout="vertical">
          <Form.Item label="Workflow Name" required>
            <Input placeholder="Enter workflow name" />
          </Form.Item>
          
          <Form.Item label="Description">
            <TextArea rows={3} placeholder="Enter workflow description" />
          </Form.Item>
          
          <Form.Item label="Approval Steps" required>
            <InputNumber min={1} max={5} style={{ width: '100%' }} />
          </Form.Item>
          
          <Form.Item label="Required Roles" required>
            <Select mode="multiple" placeholder="Select required roles">
              <Select.Option value="Manager">Manager</Select.Option>
              <Select.Option value="Director">Director</Select.Option>
              <Select.Option value="CEO">CEO</Select.Option>
              <Select.Option value="Finance">Finance</Select.Option>
            </Select>
          </Form.Item>
          
          <Form.Item>
            <Space>
              <Button type="primary">Save Workflow</Button>
              <Button onClick={() => setIsModalVisible(false)}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}