import {createApi} from "@reduxjs/toolkit/query/react";
import fetchBaseQueryAuth from "@/redux/services/query";

export const cykleoApi = createApi({
    reducerPath: "cykleoApi",
    baseQuery: fetchBaseQueryAuth({
        baseUrl: "/cykleo/",
    }),
    endpoints: (builder) => ({
        getRentsInProgress: builder.query({
            query: () => ({
                url: "/pu/rents/in_progress?size=1&sort=beginDate,DESC&version=2",
                credentials: 'include',
            }),
        }),
        getRentsCompleted: builder.query({
            query: () => ({
                url: "/pu/rents/completed?sort=beginDate,DESC",
                credentials: 'include',
            }),
        }),
        getStation: builder.query({
            query: ({stationId}) => ({
                url: `/pu/stations/${stationId}`,
                credentials: 'include',
            }),
        }),
        getAuthInformations: builder.query({
            query: () => ({
                url: "/pu/auth",
                credentials: 'include',
            }),
        }),
        login: builder.mutation({
            query: ({username, password}) => ({
                url: `/pu/auth`,
                credentials: 'include',
                method: 'POST',
                body: {
                    organizationId: 7,
                    username,
                    password
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
    }),
});

export const {
    useGetRentsInProgressQuery,
    useGetRentsCompletedQuery,
    useGetAuthInformationsQuery,
    useGetStationQuery,
    useLoginMutation,
} = cykleoApi;