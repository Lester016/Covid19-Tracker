import { StatusBar } from "expo-status-bar";
import React from "react";
import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { PersistGate } from "redux-persist/integration/react";
import { createFilter } from "redux-persist-transform-filter";

import HomeScreen from "./app/screens/HomeScreen";
import { watchAuth } from "./app/store/sagas";
import authReducer from "./app/store/reducers/auth";
import QRCodeScreen from "./app/screens/QRCodeScreen";

// For redux devtools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store only a subset of your state of reducer one
const saveSubsetFilter = createFilter("auth", ["token", "userID"]);

const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  whitelist: ["auth"], // auth reducer will be persisted
  transforms: [saveSubsetFilter],
};

// Collections of reducer.
const rootReducer = combineReducers({
  auth: authReducer,
});

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Instantiate saga.
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Middleware: Redux Persist Persistor
let persistor = persistStore(store);

// Run sagas
sagaMiddleware.run(watchAuth);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QRCodeScreen />
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}
