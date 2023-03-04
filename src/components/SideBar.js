import React from "react";
import image from "../assets/images/logo-DH.png";
import ContentWrapper from "./ContentWrapper";
import GenresInDb from "./TotalesProductos";
import LastMovieInDb from "./TotalesDeusuarios";
import ContentRowMovies from "./Totales";
import SearchMovies from "./UltimosRegistros";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import TotalesProductos from "./TotalesProductos";
import TotalesDeusuarios from "./TotalesDeusuarios";
import Totales from "./Totales";
import UltimosRegistros from "./UltimosRegistros";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        {/* <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </a> */}

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Mik Tiendas Online</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/TotalesProductos">
            {/* <i className="fas fa-fw fa-folder"></i> */}
            <span>Total de Productos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/TotalesDeusuarios">
            {/*   <i className="fas fa-fw fa-chart-area"></i> */}
            <span>Total de Usuarios</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/Totales">
            {/* <i className="fas fa-fw fa-table"></i> */}
            <span>Total Prod. Por Categorias</span>
          </Link>
        </li>

        {/*<!-- Buscador -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/UltimosRegistros">
            {/*  <i className="fas fa-"></i> */}
            <span>Ultimos Registros</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      {/*<!-- End Microdesafio 2 -->*/}
      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/TotalesProductos">
          <TotalesProductos />
        </Route>
        <Route path="/TotalesDeusuarios">
          <TotalesDeusuarios />
        </Route>
        <Route path="/Totales">
          <Totales />
        </Route>
        <Route path="/UltimosRegistros">
          <UltimosRegistros />
        </Route>
        <Route component={NotFound} />
      </Switch>
      {/*<!-- End Microdesafio 2 -->*/}
    </React.Fragment>
  );
}
export default SideBar;
