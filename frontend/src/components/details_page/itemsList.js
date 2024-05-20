import motor from "../../assets/icons/motor.jpg";
import efficiency from "../../assets/icons/eficiencia.webp";
import power from "../../assets/icons/potencia.webp";
import transmission from "../../assets/icons/transmision.jpg";
import suspension from "../../assets/icons/suspension.jpg";
import frenos from "../../assets/icons/frenos.jpg";
import frontal from "../../assets/icons/frontal.jpg";
import interior from "../../assets/icons/interior.jpg";

//The use of this file is probably innecesary, but keeps the components clean
const cardsItems = [
  {
    title: "Motor SkyActiv-G 2.5L",
    description:
      "Motor SKYACTIV-G 2,0L/16 válvulas/Dual S-VT/Inyección directa",
    image: motor,
  },
  {
    title: "Eficiencia del motor",
    description: "Relación de compresión de 13 a 1",
    image: efficiency,
  },
  {
    title: "Potencia",
    description:
      "188 caballos de potencia a 6.000 r.p.m. y un torque de 25,7 kg-m a 4.000 r.p.m. para las versiones 2,5L",
    image: power,
  },
  {
    title: "Transmisión",
    description:
      "Transmisión automática SKYACTIV®-Drive 34 de 6 velocidades con cambio manual y modo deportivo",
    image: transmission,
  },
  {
    title: "Suspensión",
    description:
      "Suspensión delantera Independiente Mc Pherson con Barra estabilizadora y Suspensión trasera Independiente Multibrazos",
    image: suspension,
  },
  {
    title: "Frenos",
    description:
      "Frenos delanteros de disco ventilado y traseros de disco sólido",
    image: frenos,
  },
  {
    title: "Equipamiento exterior",
    description:
      "Equipamiento exterior: Spoiler trasero, Luces delanteras LED automáticas con sensor de luz, Espejos retrovisores exteriores color cabina, con operación eléctrica desde el lado del conductor, abatibles eléctricamente de forma automática con desempañador",
    image: frontal,
  },
  {
    title: "Equipamiento interior",
    description:
      " Mazda Connect, Radio MP3/Receptor de AM-FM/USB Tipo C/Control desde el volante, Pantalla TFT 10,25” a color, 6 parlantes",
    image: interior,
  },
];

export default cardsItems;
