import { Product, User } from "../types";
import { api } from "./api";

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<
            {token: string},
            {email: string; password: string}
        >({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        }),
        register: builder.mutation<
            {email: string; password: string;},
            {email: string; password: string;}
        >({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData
            })
        }),
        current: builder.query<User, void>({
            query: () => ({
                url: '/profile',
                method: 'GET'
            })
        }),
        updateUser: builder.mutation<User, { userData: FormData, id: string}>({
            query: ({userData, id}) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: userData
            })
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useCurrentQuery,
    useLazyCurrentQuery,
    useUpdateUserMutation
} = userApi;

export const {
    endpoints: {login, register, current, updateUser}
} = userApi;