import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://meeting-room-booking-system-liart.vercel.app",
  credentials: "include",
  prepareHeaders:(headers, {getState})=>{
    const token  = (getState() as RootState).auth.token;
    if(token){
      headers.set('authorization',`Bearer ${token}`)
    }

  }
})

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes:["Room","slot","user"],
  endpoints: () => ({}),
});