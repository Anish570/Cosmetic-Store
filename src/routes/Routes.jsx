import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorBoundary from "../Components/ErrorBoundry";
import { Notfound } from "../components/NotFound";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />, // Added Error Boundary
        children: [
            { index: true, element: <HomePage /> },
            // { path: "wishlist", element: LazyLoad(Wishlist) },

        ],
    },
    { path: "*", element: <Notfound />, errorElement: <ErrorBoundary /> }, // Handle unknown routes
]);

export default Router;
