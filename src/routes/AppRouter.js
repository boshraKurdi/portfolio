import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "../components/Loading/Loading";
const Home = lazy(()=> import('../pages/Home'));

const router = createBrowserRouter([

  {
    path: '/portfolio',
    element:  <Suspense fallback={<Loading />}><Home/></Suspense>,
  },
]);
export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
