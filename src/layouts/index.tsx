import { Link, Outlet } from "react-router-dom";

import { TabMenu } from "primereact/tabmenu";
import { MenuItem, MenuItemOptions } from "primereact/menuitem";

export default function Layout() {
  const tabMenuTemplate = (item: MenuItem, options: MenuItemOptions) => {
    console.log(item);
    return (
      <Link to={item.url || ""} className={options.className}>
        <span style={{ marginRight: "0.75rem" }}>{item.label}</span>
        <span className={item.icon}></span>
      </Link>
    );
  };
  const items = [
    {
      label: "Diagnostico",
      icon: "pi pi-fw pi-home",
      url: "/diagnostico",
      template: tabMenuTemplate,
    },
    {
      label: "Chamado Técnico",
      icon: "pi pi-fw pi-calendar",
      url: "/diagnostico/chamado-tecnico",
      template: tabMenuTemplate,
    },
    {
      label: "Agendamento",
      icon: "pi pi-fw pi-pencil",
      url: "/diagnostico/agendamentos",
      template: tabMenuTemplate,
    },
  ];
  return (
    <>
      <TabMenu model={items} />
      <Outlet />
    </>
  );
}
