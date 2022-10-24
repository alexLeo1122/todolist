import { configureStore } from '@reduxjs/toolkit';
import taskListsReducer from '../features/task-lists/task-lists.slice';
import inputFieldReducer from '../features/inputField/inputSlice';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { MyLogger } from '../middlewares/middlewares';
import rootSaga from '../middlewares/sagas/sagas';
import createSagaMiddleware from '@redux-saga/core';


const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}


export const store = configureStore({
  reducer: {
    // taskLists: persistReducer(persistConfig,taskListsReducer),
    taskLists: taskListsReducer,

    inputValue: inputFieldReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [sagaMiddleWare,MyLogger]
});

// export const persistor = persistStore(store)

sagaMiddleWare.run(rootSaga)