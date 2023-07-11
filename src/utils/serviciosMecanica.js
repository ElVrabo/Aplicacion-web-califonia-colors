import imageMecanica from ".././assets/mecanicaPexels.jpg";
import imagePintura from ".././assets/pinturaPexels.jpg";
import imageElectrico from ".././assets/electricoPexels.jpg";
import imageTapiceria from ".././assets/tapiceriaPexels.jpg";
const serviciosMecanica = [
  {
    id: 1,
    image: imageMecanica,
    nombre: "Mecanica",
    descripcion:
      "Se ofrecen servicios como: Diagnosticos por scanner, Limpieza de inyectores, Afinacion de motores, Correcion y prevencion de suspension, etc.",
    recomendado: true,
  },
  {
    id: 2,
    image: imagePintura,
    nombre: "Pintura",
    descripcion:
      "Se ofrecen servicios como: Servicio de pintado por pieza o unidad completa, pulido y encerado a faros, pinturas, rines, cromos, cristales, etc.",
    recomendado: true,
  },
  {
    id: 3,
    image: imageElectrico,
    nombre: "Electrico",
    descripcion:
      "Se ofrecen servicios como: Reparacion de alternadores, reparacion de marchas, reparacion de quemacocos, chequeo de cables en general, cambio de focos, etc.",
    recomendado: true,
  },
  {
    id: 4,
    image: imageTapiceria,
    nombre: "Tapiceria",
    descripcion:
      "Se ofrecen servicios como: Cambio de alfombras, tapizado a vestiduras en piel, tapizado a asientos, etc.",
    recomendado: true,
  },
];

export default serviciosMecanica;
