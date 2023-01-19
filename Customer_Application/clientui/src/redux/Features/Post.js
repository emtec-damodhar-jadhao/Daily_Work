import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7234/api",
  }),
  endpoints: (builder) => ({
    GetAllPost: builder.query({
      query: () => ({
        url: "/Customer/getallcustomer",
        method: "GET",
      }),
    }),
    GetById: builder.query({
      query: (id) => {
        // console.log("ID :",id)
        return {
          url: `/Customer/getbyid?id=${id}`,

          method: "GET",
        };
      },
    }),
    DeleteCustomer: builder.mutation({
      query: (id) => {
        console.log("Deleted ID :", id);
        return {
          url: `Customer/?id=${id}`,
          method: "DELETE",
        };
      },
    }),

    AddNewCustomer: builder.mutation({
      query: (newCustomer) => {
        console.log("Create New Customer :", newCustomer);
        return {
          url: "/Customer",
          method: "POST",
          body: newCustomer,
        };
      },
    }),
    UpdateCustomer: builder.mutation({
      query: (EditCustomer) => {
        console.log("Create New Customer :", EditCustomer);
        return {
          url: "/Customer",
          method: "PUT",
          body: EditCustomer,
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetByIdQuery,
  useDeleteCustomerMutation,
  useAddNewCustomerMutation,
  useUpdateCustomerMutation,
} = postApi;
