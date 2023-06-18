import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IApp {
  showAddDataModal: boolean;
}

const initialState: IApp = {
  showAddDataModal: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowAddDataModal: (state: IApp, { payload }: PayloadAction<boolean>) => {
      state.showAddDataModal = payload;
    },
  },
});

export const { setShowAddDataModal } = appSlice.actions;
export default appSlice.reducer;
