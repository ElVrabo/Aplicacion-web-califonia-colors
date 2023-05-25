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
          <a href={referencia} className="btn-trabajos">
            Ver vacantes disponibles
          </a>
        </div>
      </div>
    </>
  );
};
