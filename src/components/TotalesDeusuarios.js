import React, { useEffect, useState } from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";

function TotalesDeusuarios() {
  const [total, settotal] = useState("");

  useEffect(() => {
    /* console.log("first"); */
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        settotal(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Totales de Usuarios:
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <div className="card bg-primary text-white shadow">
                <div className="card-body text-center">{total.total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalesDeusuarios;
