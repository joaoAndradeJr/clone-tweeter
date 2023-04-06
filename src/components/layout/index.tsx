import { NavLink, Outlet } from 'react-router-dom';
import './layout.css';

function Layout() {
  return (
    <div className="page">
      <nav className="nav">
        <NavLink to="/">
          <img width="30" src="/src/assets/home.png" alt="icon" />
          Página Inicial
        </NavLink>
        <NavLink to="/404">
          <img width="30" src="/src/assets/magnifying-glass.png" alt="icon" />
          Explorar
        </NavLink>
        <NavLink to="/404">
          <img width="30" src="/src/assets/email-envelope.png" alt="icon" />
          Mensagens
        </NavLink>
        <NavLink to="/profile/betrybe">
          <img width="30" src="/src/assets/user.png" alt="icon" />
          Meu Perfil
        </NavLink>
        <button>Tweetar</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
