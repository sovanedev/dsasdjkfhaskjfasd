import { Product } from "../types";
import { api } from "./api";

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProductById: builder.query<Product, string>({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'GET'
            })
        }),
    })
})

export const {
    useGetProductByIdQuery,
    useLazyGetProductByIdQuery,
} = productApi;

export const {
    endpoints: {getProductById}
} = productApi;