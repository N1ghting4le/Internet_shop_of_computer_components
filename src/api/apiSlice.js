import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.jsonbin.io/v3', prepareHeaders: (headers) => {
        headers.set('X-Master-Key', '$2b$10$Gh3A9M7FdzujuNYHoIPLqOoyCSckBIjFCqvd5RPHV6cGsX982tv16');
        return headers;
    }}),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => ({
                url: '/b/645cdc5c8e4aa6225e9af243/latest'
            })
        }),
        getCategoryInfo: builder.query({
            query: id => ({
                url: `/b/${id}/latest`
            })
        })
    })
});

export const {
    useGetCategoriesQuery,
    useGetCategoryInfoQuery
} = apiSlice;