import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard/dashboard";
import NewProduct from "./pages/product/newProduct";
import UpdateProduct from "./pages/product/updateProduct";
import NewSupplier from "./pages/supplier/newSupplier";
import UpdateSupplier from "./pages/supplier/updateSupplier";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/new-product",
    element: <NewProduct />,
  },
  {
    path: "/update-product/:id",
    element: <UpdateProduct />,
  },
  {
    path: "/new-supplier",
    element: <NewSupplier />,
  },
  {
    path: "/update-supplier/:id",
    element: <UpdateSupplier />,
  },
]);

export default router;
