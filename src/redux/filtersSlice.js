import { createSlice } from "@reduxjs/toolkit";

// Оголосити слайс для фільтрації контактів
const filterSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    // Додати екшен для зміни фільтра
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експортувати екшен
export const { changeFilter } = filterSlice.actions;
// Оголосити селектор для отримання значення фільтра
export const selectNameFilter = (state) => state.filters.name;
// Експортувати редуктор
export default filterSlice.reducer;
