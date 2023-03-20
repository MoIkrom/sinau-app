import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/", element: <Home /> },
  // {
  //   path: "/login",
  //   element: (
  //     <BackRoutes>
  //       <Login />
  //     </BackRoutes>
  //   ),
  // },
  // {
  //   path: "/register",
  //   element: (
  //     <BackRoutes>
  //       <Register />
  //     </BackRoutes>
  //   ),
  // },
  // {
  //   path: "/profile",
  //   element: (
  //     <PrivateRoutes allowedRoles={["user", "admin"]}>
  //       <Profile />
  //     </PrivateRoutes>
  //   ),
  // },
  // {
  //   path: "/product",
  //   element: <Product />,
  // },
  // {
  //   path: "/forgot-password",
  //   element: (
  //     <BackRoutes>
  //       <Forgot />
  //     </BackRoutes>
  //   ),
  // },
  // {
  //   path: "/profile/edit-password",
  //   element: (
  //     <PrivateRoutes>
  //       <EditPwd />
  //     </PrivateRoutes>
  //   ),
  // },

  // {
  //   path: "/history",
  //   element: (
  //     <PrivateRoutes allowedRoles={["user"]}>
  //       <History />
  //     </PrivateRoutes>
  //   ),
  // },
  // {
  //   path: "/detail-product/:id",
  //   element: (
  //     <PrivateRoutes allowedRoles={["user", "admin"]}>
  //       <Detail />
  //     </PrivateRoutes>
  //   ),
  // },
  // {
  //   path: "/cart",
  //   element: (
  //     <PrivateRoutes allowedRoles={["user"]}>
  //       <Payment />
  //     </PrivateRoutes>
  //   ),
  // },
  // {
  //   path: "/detail-product/:id/edit-product",
  //   element: (
  //     <PrivateRoutes allowedRoles={["admin"]}>
  //       <EditProduct />
  //     </PrivateRoutes>
  //   ),
  // },
  // {
  //   path: "/new-product",
  //   element: (
  //     <PrivateRoutes allowedRoles={["admin"]}>
  //       <NewProduct />
  //     </PrivateRoutes>
  //   ),
  // },
]);

export default router;
