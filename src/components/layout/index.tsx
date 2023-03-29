import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="nav-bar">
        <NavLink to="/">Página Inicial</NavLink>
        <NavLink to="/profile/betrybe">Meu Perfil</NavLink>
      </div>
      <Outlet />
    </>
  )
}

export default Layout;
