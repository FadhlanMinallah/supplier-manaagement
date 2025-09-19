'use client';

import React from 'react';
import SupplierHeader from './components/SupplierHeader';
import SupplierStats from './components/SupplierStats';
import SupplierFilters from './components/SupplierFilters';
import SupplierTable from './components/SupplierTable';
import NewSupplierModal from './components/NewSupplierModal';
import { useSupplierModal } from '@/hooks/useSupplierModal';
import { supplierData } from './data/supplierData';

const SupplierListPage = () => {
  const {
    isOpen,
    activeTab,
    form,
    showModal,
    hideModal,
    handleSave,
    handleTabChange
  } = useSupplierModal();

  return (
    <div>
      <SupplierHeader onNewSupplier={showModal} />
      <SupplierStats />
      <SupplierFilters />
      <SupplierTable data={supplierData} />
      
      <NewSupplierModal
        open={isOpen}
        form={form}
        activeTab={activeTab}
        onCancel={hideModal}
        onSave={handleSave}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default SupplierListPage;