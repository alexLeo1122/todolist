import { configureStore } from '@reduxjs/toolkit';
import taskListsReducer from '../features/task-lists/task-lists.slice';
import inputFieldReducer from '../features/inputField/inputSlice';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { MyLogger } from '../middlewares/middlewares';
const persistConfig = {
  key: 'root',
  storage,
}


export const store = configureStore({
  reducer: {
    taskLists: persistReducer(persistConfig,taskListsReducer),
    inputValue: inputFieldReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk,MyLogger]
});

export const persistor = persistStore(store)