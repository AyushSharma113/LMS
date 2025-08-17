import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";

const USER_API = "http://localhost:8080/api/v1/user/";

export const authApi = createApi({
  reducerPath: "authApi", // slice name for this API
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/user/", // change this to your API base
    credentials: "include", // include cookies if needed
  }),
  endpoints: (builder) => ({
    // post request
    registerUser: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),

    //  POST request
    loginUser: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data.user }));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    loadUser: builder.query({
      query: () => ({
        url: "profile",
        method: "GET",
      }),

      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data.user }));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    logoutUser: builder.mutation({
      query: (data) => ({
        url: "logout",
        method: "GET",
        body: data,
      }),

      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          dispatch(userLoggedOut());
        } catch (error) {
          console.log(error);
        }
      },
    }),

    updateUser: builder.mutation({
      query: (formData) => ({
        url: "/profile/update",
        method: "PUT",
        body: formData,
        credentials: "include",
      }),
    }),
  }),
});

// Export auto-generated hooks for components
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLoadUserQuery,
  useLogoutUserMutation,
  useUpdateUserMutation,
} = authApi;
