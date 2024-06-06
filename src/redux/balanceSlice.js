import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "balance",
  initialState: { value: 0 },
  reducers: {
    // тут deposit i withdraw екшени
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;
export const selectBalance = (state) => state.balance.value;
export default slice.reducer;
// export const deposit = createAction("balance/deposit");
// export const deposit = (value) => {
//   return {
//     type: "balance/deposit",
//     payload: value,
//   };
// };

// export const withdraw = createAction("balance/withdraw");
// export const withdraw = (value) => {
//   return {
//     type: "balance/withdraw",
//     payload: value,
//   };
// };

// ^^ Ця штука  екшен кріейтор

// export const balanceReducer = createReducer({ value: 0 }, (builder) => {
// ця штука нижче називається caseReducer.
// Він додається під пожен екшен.В нього додається 1) тип екшена,
// 2) функція редьюсера.Ми створюємо таким чином міні-редьюсер під кожен екшен.
// Параметр state отримає поточне значення стану із сreaterReducer-а { value: 0 }
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     });
// });
// ^^ Ця штука Редьюсер

// export const balanceReducer = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };

//     default:
//       return state;
//   }
// };

// ^^ Ця штука Редьюсер
