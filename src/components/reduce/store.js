import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from './contactsSlice'
// import storage from 'redux-persist/lib/storage'
// import { persistStore, persistReducer } from 'redux-persist'


  // const persistConfig = {
  // key: 'root',
  // storage,
  // }

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters:  filtersReducer,
  },
});
  
// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: persistReducer(persistConfig, filtersReducer),
//   },
// });

//  export const persistor = persistStore(store)

