import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Loading } from "../components/Loading";

const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const Layout = lazy(() => import("../layouts"));

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
