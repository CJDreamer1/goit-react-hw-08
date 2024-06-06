import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import balanceReducer from "../redux/balanceSlice";
import localeReducer from "../redux/localeSlice";

const balancePersistConfig = {
  // це бібліотека, яка зберігає об`єкт (balance) в localStorage
  key: "balanceValue",
  //       ^^ з такою назвою зберігатиметься в localStorage
  storage,
  whitelist: ["value"],
  //   ^^ це об`єкт властивостей, які треба зберегти(запишеться кожного разу як зміниться value)
};

const localePersistConfig = {
  // це бібліотека, яка зберігає об`єкт (lang) в localStorage
  key: "selectedLang",
  //       ^^ з такою назвою зберігатиметься в localStorage
  storage,
  whitelist: ["lang"],
  //   ^^ це об`єкт властивостей, які треба зберегти(запишеться кожного разу як зміниться value)
};

const persistedBalanceReducer = persistReducer(
  balancePersistConfig,
  balanceReducer
);

const persistedLocaleReducer = persistReducer(
  localePersistConfig,
  localeReducer
);

// const initialState = {
//   balance: {
//     value: 0,
//   },
//   // вирізаємо value: 0 і переносимо в окремий редюсер - balanceReducer. Це бестпрактіс що бне захламляти rootReducer
//   locale: {
//     lang: "uk",
//     //   вирізаємо lang: "uk" і переносимо в окремий редюсер - localeReducer.
//   },
// };
// ^^ Це називається slice. Перший слайс називається balance. Action-type робляться так: "ім`я слайсу/ім`я екшену".
// Тут додамо другий слайс - locale.

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         //   ^^ тут три крапки і стейт потрібен щоб робити копію всього стану і змінювати лише те, що нам потрібно
//         //   адже, якщо не вписати ...state - то при зміні наприклад balance + 10 ми втратимо славйс locale(він просто видалиться)
//         balance: {
//           // якщо треба змінити властивість всередині властивості - теж пишеться, але тут вже ...state.balance,
//           value: state.balance.value + action.payload,
//           //  в action приходить об`єкт який ми відправляємо з Balance
//         },
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value - action.payload,
//         },
//       };

//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           lang: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
    //  ^^ тут був balanceReducer але ми його використали вище в presistedBalanceReducer
    locale: persistedLocaleReducer,
    // ^^ тут був localeReducer але ми його використали вище в persistedLocaleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
