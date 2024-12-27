import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../Helpers/Path";
import { createAsyncThunk } from "@reduxjs/toolkit";

const placeOrderHandler = createAsyncThunk('placeOrder', async (curState) => {
  console.log(curState)
  let response = await axios.post(`${API_URL}/order`, curState, {
    headers: {
      Authorization: localStorage.getItem('access-user')
    }
  })
  return response.request.status
})
const MyCartSlice = createSlice({
  name: 'MyCart',
  initialState: [],
  reducers: {
    addProduct(curState, action) {
      curState.push(action.payload)
    },
    removeProduct: (curState, action) => {
      curState.filter(mapPro => mapPro._id != action.payload._id)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(placeOrderHandler.fulfilled, (curState, status) => {
      if (status === 200)
        return []
    })
  }
})

export { placeOrderHandler }
export const { addProduct, removeProduct } = MyCartSlice.actions
export default MyCartSlice.reducer