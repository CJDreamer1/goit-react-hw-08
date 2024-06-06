import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "locale",
  initialState: { lang: "uk" },
  reducers: {
    //   у випадку, якщо треба змінити payload на об`єкт:
    // changeLang(state, action) {
    //   state.lang = action.payload;
    changeLang: {
      reducer(state, action) {
        state.lang = action.payload.lang;
      },
      prepare(value) {
        return {
          payload: {
            id: crypto.randomUUID(),
            lang: value,
          },
        };
      },
    },
  },
});

export const { changeLang } = slice.actions;
export const selectLang = (state) => state.locale.lang;
// ^^ бест практіс називати його селектЩось. Він у нас використовується в App та в LangSwitcher в useSelector(selectLang)
export default slice.reducer;

// export const changeLang = createAction("locale/changeLang");
// ^^ Ця штука  екшен кріейтор

// export const localeReducer = createReducer({ lang: "uk" }, (builder) => {
//   builder.addCase(changeLang, (state, action) => {
//     state.lang = action.payload;
//   });
// });
// ^^ Ця штука Редьюсер
