export const INITIAL_FORM_VALUES = {
  supplierName: 'PT Setroom Indonesia',
  nickName: 'Setroom'
} as const;

export const FORM_VALIDATION_RULES = {
  supplierName: [
    { required: true, message: 'Please enter supplier name' },
    { min: 3, message: 'Supplier name must be at least 3 characters' }
  ],
  nickName: [
    { required: true, message: 'Please enter nick name' },
    { min: 2, message: 'Nick name must be at least 2 characters' }
  ]
} as const;