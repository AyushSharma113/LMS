import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "../features/api/authApi";
import rootReducer from "./rootReducer";
import { courseApi } from "../features/api/courseApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, courseApi.middleware), // <-- add middleware
});

const initializeApp = async () => {
  await store.dispatch(
    authApi.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};

initializeApp();
export default store;
