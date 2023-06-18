import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SocialDataType } from "@/types";

interface IData {
  entries: SocialDataType[] | [];
  singleEntry?: SocialDataType | null;
  isLoading: boolean;
  error?: string | null;
}

const initialState: IData = {
  entries: [
    {
      id: "672a8588-4131-4564-a71e-40bb3f589132",
      socialLink: "instagram.com/mobilerast",
      socialName: "instagram",
      description:
        "We'll help you to finish your development project successfully.",
    },
    {
      id: "abb89ee1-e3b4-44e6-89bb-180b456e3435",
      socialLink: "tr.linkedin.com/company/rastmobile",
      socialName: "linkedin",
      description:
        "Hire vetted developers from Rast Mobile to scale up your tech projects.",
    },
    {
      id: "882c0fcf-1cff-4499-88b5-5455ecb9be4c",
      socialLink: "behance.net/rastmobile",
      socialName: "behance",
      description:
        "Software Development Agency Rast Mobile Information Technology Ltd.",
    },
    {
      id: "5960d76c-f8d2-4556-ab73-1509e0a8f3ce",
      socialLink: "twitter.com/rastmobile",
      socialName: "twitter",
      description:
        "Software Development Agency Rast Mobile Information Technology Ltd.",
    },
  ],
  singleEntry: null,
  isLoading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    reset: () => initialState,
    addEntry: (state: IData, { payload }: PayloadAction<SocialDataType>) => {
      state.isLoading = true;
      state.entries = [...state.entries, payload];
      state.isLoading = false;
    },
    deleteEntry: (state, action) => {
      state.isLoading = true;
      const existingEntry = state.entries.find(
        (e) => e.id === action.payload.id
      );
      existingEntry
        ? (state.entries = state.entries.filter(
            (e) => e.id != action.payload.id
          ))
        : (state.error = "Silinecek kayit bulunamadi");
      state.isLoading = false;
    },

    updateEntry: (state, action) => {
      state.isLoading = true;
      const existingEntry = state.entries.find(
        (e) => e.id === action.payload.id
      );
      if (existingEntry) {
        state.entries = state.entries.filter((e) => e.id != action.payload.id);
        state.entries = [...state.entries, action.payload];
      } else {
        state.error = "Guncellenecek kayit bulunamadi";
      }

      state.isLoading = false;
    },
  },
});

export const { reset, addEntry, updateEntry, deleteEntry } = dataSlice.actions;
export default dataSlice.reducer;
