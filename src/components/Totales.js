import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

function Totales() {
  const [data, setData] = useState([]);

  useEffect(() => {
    /* console.log("first"); */
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        console.log("data", data);
      })
      .catch((error) => console.log(error));
  }, []);

  const totalCategorias = () => {
    let deporte = data.filter((producto) => {
      return producto.categoria.nombre == "deportes";
    });
    let arte = data.filter((producto) => {
      return producto.categoria.nombre == "arte";
    });
    let cocina = data.filter((producto) => {
      return producto.categoria.nombre == "cocina";
    });
    let reacreacion = data.filter((producto) => {
      return producto.categoria.nombre == "reacreación";
    });
    let educacion = data.filter((producto) => {
      return producto.categoria.nombre == "educación";
    });

    return [
      {
        nombre: "deportes",
        cantidad: deporte.length,
      },
      {
        nombre: "arte",
        cantidad: arte.length,
      },
      {
        nombre: "cocina",
        cantidad: cocina.length,
      },
      {
        nombre: "reacreación",
        cantidad: reacreacion.length,
      },
      {
        nombre: "educación",
        cantidad: educacion.length,
      },
    ];
  };

  return (
    <div className="row">
      {totalCategorias().map((category, i) => {
        return <SmallCard {...category} key={i} />;
      })}
    </div>
  );
}

export default Totales;
