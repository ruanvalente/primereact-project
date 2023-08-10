import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Loading } from "../components/Loading";
import Layout from "../layouts";
import { DiagnosticoRouters } from "../pages/diagnostic/routes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<div>Home</div>} />
            <Route path="/diagnostico/*" element={<DiagnosticoRouters />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
