import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { NextUIProvider } from "@nextui-org/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { Auth } from "./pages/auth"
import { Layout } from "./components/layout"
import { Porducts } from "./pages/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { CheckOut } from "./pages/checkout"
import { Order } from "./pages/order"
import { Profile } from "./pages/profile"

import { MainIndex } from "./pages/index"
const container = document.getElementById("root")

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <Auth />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: "",
            element: <MainIndex />
          },
          {
            path: 'products',
            element: <Porducts />
          },
          {
            path: 'product/:id',
            element: <Product />
          },
          {
            path: 'cart',
            element: <Cart />
          },
          {
            path: 'checkout',
            element: <CheckOut />
          },
          {
            path: 'order/:id',
            element: <Order />
          },
          {
            path: 'profile',
            element: <Profile />
          },
        ]
    }
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
