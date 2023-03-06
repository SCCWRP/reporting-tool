import { createSlice, createAsyncThunk, isRejected } from '@reduxjs/toolkit'
import fetchData from './dataService'

const initialState = {
   data: null,
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: ''
}

// Get Data
export const getData = createAsyncThunk(
   'data/fetchdata',
   async (data) => {
      const response = await fetchData(data)
      return response
   })


export const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      reset: (state) => {
         state.isLoading = false
         state.isSuccess = false
         state.isError = false
         state.message = ''
      }
   },
   extraReducers: (builder) => {
      builder
      .addCase(getData.pending, (state) => {
         state.isLoading = true
      })
      .addCase(getData.fulfilled, (state, action) => {
         state.isLoading
         state.isSuccess = true
         state.data = action.payload
      })
      .addCase(getData.rejected, (state, action) => {
         state.isLoading = false
         state.isError = true
         state.message = action.payload
         state.data = null
      })
   }
})

export const { reset } = dataSlice.actions
export default dataSlice.reducer