import { useParams } from "react-router-dom";

export function DetalhesAgendamento() {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}
