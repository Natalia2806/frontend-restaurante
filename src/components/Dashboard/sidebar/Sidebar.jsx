import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  AttachMoney,
  AssignmentInd,
  RestaurantMenu,
  AddAlertSharp,
  AssignmentTurnedIn,
  Contacts,
  Comment,
  EmailRounded,
  ChatBubble,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tablero</h3>
          <ul className="sidebarList">
            <Link to="/inicio" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analisis
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Ventas
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Administrar</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <  AssignmentInd className="sidebarIcon" />
                Personal
              </li>
              </Link>
              <Link to="/clients" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Clientes
              </li>
              </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <RestaurantMenu className="sidebarIcon" />
                Menu
              </li>
            </Link>
            <li className="sidebarListItem">
                <AssignmentTurnedIn className="sidebarIcon" />
                Servicios
              </li>
            <li className="sidebarListItem">
              <AddAlertSharp className="sidebarIcon" />
              Reservas
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Compras
            </li>
            <li className="sidebarListItem">
              <Contacts className="sidebarIcon" />
              Contactenos
            </li>
            <li className="sidebarListItem">
              <Comment className="sidebarIcon" />
              Comentarios
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificaciones</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailRounded lassName="sidebarIcon" />
              Correo
            </li>
            <li className="sidebarListItem">
              <ChatBubble className="sidebarIcon" />
              Mesajes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
