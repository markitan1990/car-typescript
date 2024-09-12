import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
import {Layout} from "./layout/Layout";
import {HomePage} from "./pages/HomePage";
import {CarPage} from "./pages/CarPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace />,
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'cars',
                element: <CarPage />,
            },
            {
                path: '*',
                element: <Navigate to="/home" />,
            },
        ],
    },
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};
