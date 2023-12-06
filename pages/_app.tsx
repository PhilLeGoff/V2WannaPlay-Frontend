import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

// redux imports
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import user from "../reducers/user";

// redux-persist imports
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "../reducers/storage.js";

import { Tauri } from "next/font/google";

const tauri = Tauri({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const reducers = combineReducers({ user });
const persistConfig = { key: "wannaplay", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
