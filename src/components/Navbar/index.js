import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <h1 className="title-navbar">SAL&SALSA</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="src/historia.html"
              >
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/menu">
                Menú
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="src/servicios.html"
              >
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="src/reservas.html"
              >
                Reservas
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="src/carrito_de_compras.html"
              >
                Carrito
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
