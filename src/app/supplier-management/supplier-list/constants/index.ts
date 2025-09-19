export const SUPPLIER_STATUS = {
  ACTIVE: 'Active',
  IN_PROGRESS: 'In Progress',
  BLOCKED: 'Blocked'
} as const;

export const MODAL_TABS = {
  ADDRESS: 'address',
  CONTACTS: 'contacts',
  GROUPS: 'groups',
  MATERIAL_LIST: 'materialList',
  OTHERS: 'others'
} as const;

export const TABLE_CONFIG = {
  PAGE_SIZE: 10,
  TOTAL_SUPPLIERS: 1869
};

export const STATUS_COLORS = {
  [SUPPLIER_STATUS.ACTIVE]: 'success',
  [SUPPLIER_STATUS.IN_PROGRESS]: 'processing',
  [SUPPLIER_STATUS.BLOCKED]: 'error'
} as const;