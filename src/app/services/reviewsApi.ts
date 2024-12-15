import { Review, ReviewLike } from "../types";
import { api } from "./api";

export const reviewsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // Получение списка отзывов, например, для конкретного товара
        getReviews: builder.query<Review[], { productId: number }>({
            query: ({ productId }) => ({
                url: `/reviews/${productId}`,
                method: 'GET'
            })
        }),
        
        // Оставить отзыв
        addReview: builder.mutation<Review, Omit<Review, 'reviewId' | 'isModerated' | 'likes'>>({
            query: (newReview) => ({
                url: `/reviews`,
                method: 'POST',
                body: newReview
            })
        }),
        
        // Удалить отзыв
        deleteReview: builder.mutation<{ success: boolean }, { reviewId: number }>({
            query: ({ reviewId }) => ({
                url: `/reviews/${reviewId}`,
                method: 'DELETE'
            })
        }),
        
        // Лайк/дизлайк отзыва
        likeReview: builder.mutation<ReviewLike, { reviewId: number; type: "like" | "dislike" }>({
            query: ({ reviewId, type }) => ({
                url: `/reviews/${reviewId}/like`,
                method: 'POST',
                body: { type }
            })
        }),

        // Если нужно обновить отзыв (например, изменить текст)
        updateReview: builder.mutation<Review, { reviewId: number; description: string }>({
            query: ({ reviewId, description }) => ({
                url: `/reviews/${reviewId}`,
                method: 'PATCH',
                body: { description }
            })
        })
    })
});

export const {
    useGetReviewsQuery,
    useAddReviewMutation,
    useDeleteReviewMutation,
    useLikeReviewMutation,
    useUpdateReviewMutation
} = reviewsApi;

export const {
    endpoints: { getReviews, addReview, deleteReview, likeReview, updateReview }
} = reviewsApi;
