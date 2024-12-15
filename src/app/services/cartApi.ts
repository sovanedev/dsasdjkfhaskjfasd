import { Cart, CartItem, Product } from "../types";
import { api } from "./api";

export const cartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query<Cart, void>({
            query: () => ({
                url: `/cart`,
                method: 'GET'
            })
        }),
        deleteCart: builder.mutation<Cart, void>({
            query: () => ({
                url: `/clearcart`,
                method: 'POST'
            })
        }),
        removeItemFromCart: builder.mutation<Cart, { productId: string }>({
            query: ({ productId }) => ({
                url: `/removefromcart/${productId}`,
                method: 'POST'
            })
        }),
        updateItemQuantity: builder.mutation<Cart, { productId: string; quantity: number }>({
            query: ({ productId, quantity }) => ({
                url: `/updatequantity`,
                method: 'POST',
                body: { productId, quantity }
            })
        }),
        getCartTotals: builder.query<{ totalPrice: number; totalItems: number }, void>({
            query: () => ({
                url: `/carttotals`,
                method: 'GET'
            })
        }),
        applyCoupon: builder.mutation<Cart, { couponCode: string }>({
            query: ({ couponCode }) => ({
                url: `/applycoupon`,
                method: 'POST',
                body: { couponCode }
            })
        }),
        checkout: builder.mutation<{ orderId: string }, void>({
            query: () => ({
                url: `/checkout`,
                method: 'POST'
            })
        }),                
        updateCart: builder.mutation<Cart, CartItem> ({
            query: (cart) => ({
                url: `/addcart`,
                method: 'POST',
                body: cart
            })
        })
    })
})

export const {
    useDeleteCartMutation,
    useGetCartQuery,
    useLazyGetCartQuery,
    useUpdateCartMutation,
    useApplyCouponMutation,
    useCheckoutMutation,
    useGetCartTotalsQuery,
    useLazyGetCartTotalsQuery,
    useRemoveItemFromCartMutation,
    useUpdateItemQuantityMutation
} = cartApi;

export const {
    endpoints: {getCart, deleteCart, updateCart, checkout, getCartTotals, applyCoupon, removeItemFromCart, updateItemQuantity}
} = cartApi;