export interface SupplierData {
  key: string;
  id: string;
  code: string;
  name: string;
  shortName: string;
  address: string;
  contact: string;
  status: 'Active' | 'In Progress' | 'Blocked';
}

export interface AddressData {
  key: string;
  icon: string;
  name: string;
  address: string;
  isMain: boolean;
}

export interface ContactData {
  key: string;
  id: number;
  name: string;
  jobPosition: string;
  email: string;
  phone: string;
  mobile: string;
  isMain: boolean;
}

export interface GroupData {
  key: string;
  id: number;
  groupName: string;
  value: string;
  active: boolean;
}

// Modal Tab Types
export type ModalTab = 
  | 'address'
  | 'contacts'
  | 'groups'
  | 'materialList'
  | 'others';

import { MODAL_TABS } from '@/app/supplier-management/supplier-list/constants';

export type ModalTabKey = keyof typeof MODAL_TABS;