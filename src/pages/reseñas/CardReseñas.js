import "./cardReseñas.css";
export const CardReseñas = ({
  imgCardReseñas,
  textCardReseñas,
  clickCardReseñas,
  textLinkReseñas,
}) => {
  return (
    <>
      <div className="container-card-reseñas">
        <div className="body-reseñas">
          <img src={imgCardReseñas} alt="" />
          <p>{textCardReseñas}</p>
          <div className="btn-view-comments">
            <a href={clickCardReseñas}>{textLinkReseñas}</a>
          </div>
        </div>
      </div>
    </>
  );
};
