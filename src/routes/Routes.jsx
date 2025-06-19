import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorBoundary from "../components/ErrorBoundry";
import NotFound from "../components/NotFound";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />, // Added Error Boundary
        children: [
            { index: true, element: <HomePage /> },

        ],
    },
    { path: "*", element: <NotFound />, errorElement: <ErrorBoundary /> }, // Handle unknown routes
]);

export default Router;
