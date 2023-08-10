import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const ChamadoTecnico = lazy(() => import("../pages/chamadoTecnico"));
const Agendamento = lazy(() => import("../pages/agendamento"));
const DetalhesAgendamento = lazy(() => import("../pages/detalhesAgendamento"));

export function DiagnosticoRouters() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="chamado-tecnico" element={<ChamadoTecnico />} />
        <Route path="agendamentos" element={<Agendamento />} />
        <Route path="agendamentos/:id" element={<DetalhesAgendamento />} />
      </Routes>
    </>
  );
}
