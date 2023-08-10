import { useParams } from "react-router-dom";

export default function DetalhesAgendamento() {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}
