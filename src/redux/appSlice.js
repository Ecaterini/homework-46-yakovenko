import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// async action (Thunk)
export const fetchUser = createAsyncThunk(
  "app/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await res.json();
      return data; // { id, name, ... }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,       
  theme: "light",
  status: "idle",    // idle | loading | succeeded | failed
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload; 
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;