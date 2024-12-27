import * as YUP from 'yup'
const OrderValidation = YUP.object({
  name: YUP.string().required('Name is required'),
  email: YUP.string().required('Email is required'),
  contact: YUP.number().required('Contact no. is required'),
  address: YUP.string().required('Address is required.'),
  product_id: YUP.string().required('Product Id is required'),
  mode: YUP.string().required('Please Select payment mode.'),
})

export default OrderValidation