import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Cart from "../pages/Cart";
import App from "../App";
import ErrorPage from "../pages/Error/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "home", element: <HomePage /> },
            { path: "cart", element: <Cart /> },
        ]
    },
])