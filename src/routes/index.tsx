import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "../pages/Product";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Layout } from "../layouts";

export function AppRoutes() {
  return (
    // <Routes>
    //   <Route element={<Layout />}>
    //     <Route path="/" element={<Product />} />
    //     <Route path="about" element={<Product />} />
    //   </Route>
    // </Routes>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
