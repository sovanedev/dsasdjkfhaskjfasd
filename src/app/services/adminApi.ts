import { api } from "./api";
import { Review, User, Product } from "../types";

export const adminApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // ! Отзывы !
        moderateReview: builder.mutation<Review, { reviewId: number; isModerated: boolean }>({
            query: ({ reviewId, isModerated }) => ({
                url: `/admin/reviews/${reviewId}/moderate`,
                method: 'POST',
                body: { isModerated },
            }),
        }),
        deleteReview: builder.mutation<Review, { reviewId: number }>({
            query: ({ reviewId }) => ({
                url: `/admin/reviews/${reviewId}/delete`,
                method: 'POST'
            }),
        }),
        // ! Управление юзерами !
        deleteUser: builder.mutation<User, { userId: number }>({
            query: ({ userId }) => ({
                url: `/admin/users/${userId}/delete`,
                method: 'POST'
            }),
        }),
        updateUser: builder.mutation<User, { userId: number, userData: FormData }>({
            query: ({ userId, userData }) => ({
                url: `/admin/users/${userId}/update`,
                method: 'POST',
                body: userData
            }),
        }),

        // ! Управление товарами !
        createProduct: builder.mutation<Product, {productData: FormData, id: string}>({
            query: ({productData, id}) => ({
                url: `/admin/products/create/${id}`,
                method: 'POST',
                body: productData
            })
        }),
        updateProduct: builder.mutation<Product, {productData: FormData, id: string}>({
            query: ({productData, id}) => ({
                url: `/admin/products/edit/${id}`,
                method: 'POST',
                body: productData
            })
        }),
        deleteProduct: builder.mutation<Product, {id: string}>({
            query: ({id}) => ({
                url: `/admin/products/delete/${id}`,
                method: 'POST'
            })
        }),
    }),
});

export const {
    useModerateReviewMutation,
    useCreateProductMutation,
    useDeleteProductMutation,
    useDeleteReviewMutation,
    useDeleteUserMutation,
    useUpdateProductMutation,
    useUpdateUserMutation
} = adminApi;

export const {
    endpoints: { deleteUser, updateUser, deleteReview, deleteProduct, updateProduct, createProduct, moderateReview }
} = adminApi;
