import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

function Totales() {
  const [total, settotal] = useState("");

  useEffect(() => {
    /* console.log("first"); */
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => {
        settotal(data);
        //let categorias = data.categorias;
        settotal(data);
        /*  console.log("categorias", categorias);
         */
        settotal(data);
      })
      .catch((error) => console.log(error));
  }, []);

  /*  let categorias = [
    {
      title: "Deportes",
      color: "warning",
      cuantity: total.deporte,
      icon: "fa-user-check",
    },
    {
      title: "Educación",
      color: "success",
      cuantity: total.educación,
      icon: "fa-user-check",
    },
  ]; */

  return (
    <div className="row">
      {/*   {total.categorias.map((category, i) => {
        return <SmallCard {...category} key={i} />;
      })} */}
    </div>
  );
}

export default Totales;
