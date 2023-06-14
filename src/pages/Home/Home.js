import { Navegacion } from "../../components/Navegacion/Navegacion";
import { Header } from "../../layouts/viewHeader";
import { Vision } from "../../layouts/viewVision";
import { Mision, Valores } from "../../layouts/viewMision";
export const Home = () => {
  return (
    <>
      <Navegacion />
      <Header
        titulo="¿Quienes somos?"
        parrafo="Somos una empresa tlaxcalteca, cuyo objetivo y compromiso es otorgar servicios de calidad, ya que nuestra preparacion, conocimiento y experiencia nos avalan para atender las necesidades del cliente. Iniciamos nuestras actividades en el año 1994, ofreciendo servicios competitivos dentro del mercado, generando fuentes de empleo para coadyuvar a la economia del estado. Atentido personalmente por tus servidores Jesus Hernandez Hernandez y Felix Hernandez Lopez. "
      />

      <Vision
        imagen={<ion-icon name="eye-outline"></ion-icon>}
        vision="Nuestra vision"
        texto="Posicionarnos como empresa lider en el ramo para seguir atendiendo las necesidades del cliente con la calidad, capacidad y cumplimiento oportuno que siempre nos a caracterizado, enfrentnando retos a traves de metodos innovadores, reconocida por la satisfaccion del cliente."
      />
      <Mision
        imagen={<ion-icon name="rocket-outline"></ion-icon>}
        mision="Nuestra mision"
        texto="Ofrecer servicios de muy alta calidad y darle la confianza a todos nuestros usuarios de que conservaremos sus autos en un muy buen estado de operacion eficiente y seguro, superando todas las expectativas de nuestros consumidores en el menor tiempo posibles. ¡PARA NUESTRA EMPRESA USTED Y SU VEHICULO SON PRIORIDAD!. "
      />
      <Valores
        imagen={<ion-icon name="happy-outline"></ion-icon>}
        valores="Nuestros valores"
        texto="Somos una empresa que cumple en tiempo y forma con las necesidades de cada uno de nuestros clientes, sabemos trabajar de manera muy honesta garantizando la buena calidad del trabajo al igual que todas las herramientas utilizadas. Nos dirigimos a nuestros clientes de manera equitativa y respetuosa. ¡Somos leales ante nuestros socios comerciales, empleados y accionistas!"
      />
    </>
  );
};
