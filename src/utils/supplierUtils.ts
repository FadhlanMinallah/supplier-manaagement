import { SupplierData } from '@/types/supplier';
import { STATUS_COLORS, SUPPLIER_STATUS } from '@/app/supplier-management/supplier-list/constants';

export const getStatusColor = (status: SupplierData['status']) => {
  return STATUS_COLORS[status] || 'default';
};

export const formatPaginationText = (total: number, range: [number, number]) => {
  return `${range[0]}-${range[1]} of ${total} suppliers`;
};

export const isFirstRow = (index: number) => index === 0;

export const generateSupplierKey = (id: string, code: string) => {
  return `${id}-${code}`;
};

export const filterSuppliersByStatus = (
  suppliers: SupplierData[], 
  status: string
) => {
  if (status === 'All') return suppliers;
  return suppliers.filter(supplier => supplier.status === status);
};

export const searchSuppliers = (
  suppliers: SupplierData[], 
  searchTerm: string
) => {
  if (!searchTerm) return suppliers;
  
  const term = searchTerm.toLowerCase();
  return suppliers.filter(supplier => 
    supplier.name.toLowerCase().includes(term) ||
    supplier.contact.toLowerCase().includes(term) ||
    supplier.address.toLowerCase().includes(term) ||
    supplier.id.toLowerCase().includes(term)
  );
};