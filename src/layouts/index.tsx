import { Link, Outlet } from "react-router-dom";

import { TabMenu } from "primereact/tabmenu";
import { MenuItem, MenuItemOptions } from "primereact/menuitem";

export default function Layout() {
  const tabMenuTemplate = (item: MenuItem, options: MenuItemOptions) => {
    return (
      <Link to={item.url || ""} className={options.className}>
        <span style={{ marginRight: "0.75rem" }}>{item.label}</span>
        <span className={item.icon}></span>
      </Link>
    );
  };
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      url: "",
      template: tabMenuTemplate,
    },
    {
      label: "Product",
      icon: "pi pi-fw pi-calendar",
      url: "product",
      template: tabMenuTemplate,
    },
    {
      label: "About",
      icon: "pi pi-fw pi-pencil",
      url: "about",
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
