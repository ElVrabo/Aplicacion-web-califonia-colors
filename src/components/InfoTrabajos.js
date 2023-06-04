import React from "react";
import "../trabajos.css";
export const InfoTrabajos = ({ img, info, referencia }) => {
  return (
    <>
      <div className="section-trabajos">
        <div className="card-trabajos">
          <div className="body-trabajos">
            <img src={img} alt="" />
            <p>{info}</p>
          </div>
          <a
            href={referencia}
            className="bg-blue-500 hover:bg-blue-700 w-50 text-white text-decoration-none text-center rounded-md"
          >
            Ver vacantes disponibles
          </a>
        </div>
      </div>
    </>
  );
};
