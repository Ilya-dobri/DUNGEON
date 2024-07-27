import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks for fetching data
export const fetchDungeons = createAsyncThunk('data/fetchDungeons', async (limit) => {
  const response = await axios.get(`http://localhost:8080/dungeons?limit=${limit}`);
  return response.data.items;
});

export const searchDungeons = createAsyncThunk('data/searchDungeons', async (title) => {
  const response = await axios.get(`http://localhost:8080/dungeons?title=${title}`);
  return response.data.items;
});

export const loadMoreDungeons = createAsyncThunk('data/loadMoreDungeons', async (limit) => {
  const response = await axios.get(`http://localhost:8080/dungeons?limit=${limit}`);
  return response.data.items;
});


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDungeons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDungeons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDungeons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchDungeons.fulfilled, (state, action) => {
        state.items = action.payload;
        if(!action.payload.length){
          state.error = true
        }
      })
      
      .addCase(loadMoreDungeons.fulfilled, (state, action) => {
        state.items = action.payload;
      })
  },
});

export const {clearError } = cartSlice.actions;
export default cartSlice.reducer;