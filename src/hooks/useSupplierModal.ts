import { useState } from 'react';
import { Form } from 'antd';
import { MODAL_TABS } from '@/app/supplier-management/supplier-list/constants';
import { ModalTab } from '@/types/supplier';

export const useSupplierModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ModalTab>(MODAL_TABS.ADDRESS);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    form.resetFields();
    setActiveTab(MODAL_TABS.ADDRESS);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form values:', values);
      hideModal();
      // Here you would typically call an API to save the supplier
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };

  const handleTabChange = (tab: string) => {
    // Type guard to ensure tab is valid
    const validTabs = Object.values(MODAL_TABS);
    if (validTabs.includes(tab as ModalTab)) {
      setActiveTab(tab as ModalTab);
    }
  };

  return {
    isOpen,
    activeTab,
    form,
    showModal,
    hideModal,
    handleSave,
    handleTabChange,
    setActiveTab
  };
};