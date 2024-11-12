import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "../components/Loading/Loading";
const Home = lazy(()=> import('../pages/Home'));

const router = createBrowserRouter([

  {
    path: '/test',
    element:  <Suspense fallback={<Loading />}><Home/></Suspense>,
  },
  {
    path: '/test/loading',
    element:  <Loading/>,
  },
]);
export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
