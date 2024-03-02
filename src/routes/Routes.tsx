import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Cart from "../pages/Cart";
import App from "../App";
import ErrorPage from "../shared/Error/ErrorPage";

export const router = createBrowserRouter([

    {
        path: "/",
        element: < Navigate to="/home" />,
        errorElement: <ErrorPage />
    },
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