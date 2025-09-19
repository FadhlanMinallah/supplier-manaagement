import React from 'react';
import { Modal, Form, Row, Col, Input, Divider, Tabs, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/es/form';
import LogoUpload from './modal/LogoUpload';
import AddressTab from './modal/AddressTab';
import ContactsTab from './modal/ContactsTab';
import GroupsTab from './modal/GroupsTab';
import { addressData, contactData, groupData } from '../data/modalData';
import { MODAL_TABS } from '../constants';
import { INITIAL_FORM_VALUES, FORM_VALIDATION_RULES } from '../constants/formData';
import { ModalTab } from '@/types/supplier';

const { TabPane } = Tabs;

interface NewSupplierModalProps {
    open: boolean;
    form: FormInstance;
    activeTab: ModalTab;
    onCancel: () => void;
    onSave: () => void;
    onTabChange: (tab: string) => void;
}

const NewSupplierModal: React.FC<NewSupplierModalProps> = ({
    open,
    form,
    activeTab,
    onCancel,
    onSave,
    onTabChange
}) => {
    return (
        <Modal
            title="New Supplier"
            open={open}
            onCancel={onCancel}
            width={1000}
            style={{ top: 20 }}
            footer={[
                <Button key="cancel" onClick={onCancel} size="large">
                    Cancel
                </Button>,
                <Button key="save" type="primary" onClick={onSave} size="large">
                    Save
                </Button>
            ]}
            closeIcon={<CloseOutlined />}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={INITIAL_FORM_VALUES}
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <LogoUpload />
                    </Col>
                    <Col span={18}>
                        <Form.Item
                            label="Supplier Name"
                            name="supplierName"
                            rules={[...FORM_VALIDATION_RULES.supplierName]}
                        >
                            <Input
                                placeholder="PT Setroom Indonesia"
                                style={{ height: '40px' }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Nick Name"
                            name="nickName"
                            rules={[...FORM_VALIDATION_RULES.nickName]}
                        >
                            <Input
                                placeholder="Setroom"
                                style={{ height: '40px' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider />

                <Tabs
                    activeKey={activeTab}
                    onChange={onTabChange}
                    style={{ marginTop: '20px' }}
                    items={[
                        {
                            key: MODAL_TABS.ADDRESS,
                            label: "Address",
                            children: <AddressTab data={addressData} />,
                        },
                        {
                            key: MODAL_TABS.CONTACTS,
                            label: "Contacts",
                            children: <ContactsTab data={contactData} />,
                        },
                        {
                            key: MODAL_TABS.GROUPS,
                            label: "Groups",
                            children: <GroupsTab data={groupData} />,
                        },
                        {
                            key: MODAL_TABS.MATERIAL_LIST,
                            label: "Material List",
                            children: (
                                <div
                                    style={{
                                        padding: "40px",
                                        textAlign: "center",
                                        color: "#999",
                                    }}
                                >
                                    Material List Content
                                </div>
                            ),
                        },
                        {
                            key: MODAL_TABS.OTHERS,
                            label: "Others",
                            children: (
                                <div
                                    style={{
                                        padding: "40px",
                                        textAlign: "center",
                                        color: "#999",
                                    }}
                                >
                                    Others Content
                                </div>
                            ),
                        },
                    ]}
                />

            </Form>
        </Modal>
    );
};

export default NewSupplierModal;