import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => ({
                url: '/categories'
            })
        }),
        getCategoryInfo: builder.query({
            query: category => ({
                url: `/${category.replace(/ /g, '')}`
            })
        }),
        getCartProducts: builder.query({
            query: () => ({
                url: '/cart'
            }),
            providesTags: ['Cart']
        }),
        addToCart: builder.mutation({
            query: item => ({
                url: '/cart',
                method: 'POST',
                body: item
            }),
            invalidatesTags: ['Cart']
        }),
        deleteFromCart: builder.mutation({
            query: id => ({
                url: `/cart/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Cart']
        })
    })
});

export const {
    useGetCategoriesQuery,
    useGetCategoryInfoQuery,
    useGetCartProductsQuery,
    useAddToCartMutation,
    useDeleteFromCartMutation
} = apiSlice;