import Carousel from "react-bootstrap/Carousel";
import "./carrusel.css";
export function Carrusel({ firstImage, secondImage, thirdImage, redireccion }) {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={firstImage} alt="First slide" />
        <Carousel.Caption>
          <h1 className="title-carrusel">¿Buscas un empleo?</h1>
          <div className="container-redireccionar">
            <div className="redireccionar">
              <a href={redireccion}>Ver vacantes</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={secondImage} alt="Second slide" />

        <Carousel.Caption>
          <h1 className="title-carrusel">¡No esperes mas!</h1>
          <div className="container-redireccionar">
            <div className="redireccionar">
              <a href={redireccion}>Ver vacantes</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={thirdImage} alt="Third slide" />

        <Carousel.Caption>
          <h1 className="title-carrusel">Se de nuestro equipo</h1>
          <div className="container-redireccionar">
            <div className="redireccionar">
              <a href={redireccion}>Ver vacantes</a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
