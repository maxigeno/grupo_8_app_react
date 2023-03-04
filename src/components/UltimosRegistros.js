import React, { useState, useEffect, useRef } from "react";

import noPoster from "../assets/images/no-poster.jpg";

function UltimosRegistros() {
  const [data, setData] = useState([]);
  const [lastProduct, setlastProduct] = useState({});
  const [lastUser, setLastUser] = useState({});

  useEffect(() => {
    /* console.log("first"); */
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setlastProduct(data.data[data.data.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    /* console.log("first"); */
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => {
        setLastUser(data.users[data.users.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);

  const categoria = (id) => {
    {
      if (id == 1) {
        return "Deportes";
      } else if (id == 2) {
        return "Arte";
      } else if (id == 3) {
        return "Cocina";
      } else if (id == 4) {
        return "Recreación";
      } else if (id == 5) {
        return "Educación";
      }
    }
  };

  console.log("lastUser", lastUser);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {/*    <h2 className="mt-5 mb-5">Últimos Registros</h2> */}
          <h2>Ultimo Producto Registrado</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Descuento</th>
                <th scope="col">Nuevo</th>
                <th scope="col">Destacado</th>
                <th scope="col">Categoria</th>
                <th scope="col">Imagen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{lastProduct.id}</th>
                <td>{lastProduct.nombre}</td>
                <td>{lastProduct.descripcion}</td>
                <td>{lastProduct.precio}</td>
                <td>{lastProduct.porcentaje_descuento}%</td>
                <td>{lastProduct.nuevo ? "Si" : "No"}</td>
                <td>{lastProduct.destacado ? "Si" : "No"}</td>
                <td>{categoria(lastProduct.categoria_id)}</td>
                <td>
                  <img src={noPoster} alt="No hay imagen" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12">
          <h2>Ultimo Usuario Registrado</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Rol</th>
                <th scope="col">Avatar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{lastUser.id}</th>
                <td>{lastUser.nombre}</td>
                <td>{lastUser.apellido}</td>
                <td>{lastUser.email}</td>
                <td>{lastUser.rol}</td>
                <td>
                  <img src={noPoster} alt="No hay imagen" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UltimosRegistros;
