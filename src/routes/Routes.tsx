import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Cart from "../pages/Cart";
import App from "../App";
import UIErrorPage from "../shared/Error/UIErrorPage";
import ConfirmPaymentCart from "../pages/Confirmation";

export const router = createBrowserRouter([
    {
        path: "/",
        element: < Navigate to="/home" />,
        errorElement: <UIErrorPage />
    },
    {
        path: "/",
        element: <App />,
        errorElement: <UIErrorPage />,
        children: [
            { path: "home", element: <HomePage /> },
            { path: "cart", element: <Cart />, },
            { path: "cart/confirmation", element: < ConfirmPaymentCart />, }
        ]
    },
])