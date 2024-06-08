import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    // Додати екшен для додавання контакту
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      // Додати екшен для видалення контакту за ID
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
// Експортувати екшени
export const { addContact, deleteContact } = contactsSlice.actions;
// Оголосити селектор для отримання списку контактів
export const selectContacts = (state) => state.contacts.items;
// Експортувати редуктор
export default contactsSlice.reducer;
