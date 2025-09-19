import { AddressData, ContactData, GroupData } from '@/types/supplier';

export const addressData: AddressData[] = [
  {
    key: '1',
    icon: '🏢',
    name: 'Head Office',
    address: 'Fatmawati Raya St, 123',
    isMain: true
  },
  {
    key: '2',
    icon: '🏪',
    name: 'Branch Office',
    address: 'Ciawi, 99',
    isMain: false
  }
];

export const contactData: ContactData[] = [
  {
    key: '1',
    id: 1,
    name: 'Albert',
    jobPosition: 'CEO',
    email: 'einstein@gmail.com',
    phone: '021.123456',
    mobile: '0811234567',
    isMain: true
  },
  {
    key: '2',
    id: 2,
    name: 'Isaac',
    jobPosition: 'Mgr Proc',
    email: 'newton@gmail.com',
    phone: '021.654321',
    mobile: '0811765432',
    isMain: false
  }
];

export const groupData: GroupData[] = [
  {
    key: '1',
    id: 1,
    groupName: 'Industry',
    value: 'Manufacture',
    active: true
  },
  {
    key: '2',
    id: 2,
    groupName: 'Telkom Group',
    value: 'Non Telkom Group',
    active: true
  }
];