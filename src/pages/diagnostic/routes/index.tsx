import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { ChamadoTecnico } from "../pages/chamadoTecnico";
import { Agendamento } from "../pages/agendamento";
import { DetalhesAgendamento } from "../pages/detalhesAgendamento";

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
