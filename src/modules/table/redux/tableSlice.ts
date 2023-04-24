import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tableApi from "../../../api/tableApi";

export const getDataTable = createAsyncThunk("table", async () => {
  const { data } = await tableApi.getData();

  return data;
});

const photoSlice = createSlice({
  name: "table",

  initialState: {
    tableList: [],
  },

  reducers: {
    deleteTableField: (state, action) => {
      state.tableList = state.tableList.filter(
        (table) => table.id !== action.payload
      );
    },
  },

  extraReducers: {
    [getDataTable.fulfilled.toString()]: (state: any, action: any) => {
      state.tableList = action.payload;
    },
  },
});

const { actions, reducer } = photoSlice;
export const { deleteTableField } = actions;

export default reducer;
