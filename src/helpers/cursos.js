import imagenIngles from "../assets/img/cursoIngles/ingles A1.jpg";
import imagenIngles3 from "../assets/img/cursoIngles/inglesintermedio.jpg";
import imagenIngles4 from "../assets/img/cursoIngles/cursos-ingles-c1.jpg";
import imagenFrances from "../assets/img/cursoFrances/lenguaje-frances A1.jpg";
import imagenFrances3 from "../assets/img/cursoFrances/Learning-French-Course.jpg";
import imagenFrances4 from "../assets/img/cursoFrances/imagenFrancesC1.jpg";
import imagenItaliano from "../assets/img/cursoItaliano/italianoA1.webp";
import imagenItaliano3 from "../assets/img/cursoItaliano/italianoB1.webp";
import imagenItaliano4 from "../assets/img/cursoItaliano/italianoC1.jpg";

export const cursos = [
  {
    id: 1,
    categoria: "ingles",
    imagen: imagenIngles,
    nombreCurso: "Ingles para principiantes",
    nivel: "A1-A2",
   descripcionBreve :
      " Este curso está diseñado para aquellos que desean iniciar su camino en el aprendizaje del idioma inglés.",
    duracion: "Duración: 30 clases | Modalidad: Online",
    precio: "30.000",
  },

  {
    id: 2,
    categoria: "ingles",
    imagen: imagenIngles3,
    nombreCurso: "Ingles intermedio",
    nivel: "B1-B2",
    descripcionBreve:
      "Comprende mejor el inglés hablado y pratica la pronunciación para conversar con eficiencia y fluidez.",
    duracion: "Duración: 32 clases | Modalidad: Online",

    precio: "70.000",
  },
  {
    id: 3,
    categoria: "ingles",
    imagen: imagenIngles4,
    nombreCurso: "Ingles avanzado",
    nivel: "C1-C2",
    descripcionBreve:
      "Da un paso adelante con tu inglés: Mejora la gramática, lectura, escucha, vocabulario y más.",
    duracion: "Duración: 37 clases | Modalidad: Online",
    precio: "49.000",
  },
  {
    id: 5,
    categoria: "frances",
    imagen: imagenFrances,
    nombreCurso: "Frances para principiantes",
    nivel: "A1-A2",
    descripcionBreve:
      "Este curso está diseñado para aquellos que desean iniciar su camino en el aprendizaje del idioma francés.",
    duracion: "Duración: 20 clases | Modalidad: Online",
    precio: "30.000",
  },

  {
    id: 6,
    categoria: "frances",
    imagen: imagenFrances3,
    nombreCurso: "Frances intermedio",
    nivel: "B1-B2",
    descripcionBreve:
      "Comprende mejor el francés hablado y pratica la pronunciación para conversar con eficiencia y fluidez.",
    duracion: "Duración: 28 clases | Modalidad: Online",
    precio: "70.000",
  },
  {
    id: 7,
    categoria: "frances",
    imagen: imagenFrances4,
    nombreCurso: "Frances avanzado",
    nivel: "C1",
    descripcionBreve:
      "Da un paso adelante con tu francés: Mejora la gramática,lectura, escucha, vocabulario y más.",
    duracion: "Duración: 37 clases | Modalidad: Online",
    precio: " 49.000",
  },
  {
    id: 8,
    categoria: "italiano",
    imagen: imagenItaliano,
    nombreCurso: "Italiano para principiantes",
    nivel: "A1",
    descripcionBreve:
      "Este curso está diseñado para aquellos que desean iniciar su camino en el aprendizaje del idioma inglés.",
    duracion: "Duración: 30 clases | Modalidad: Online",

    precio: "30.000",
  },

  {
    id: 9,
    categoria: "italiano",
    imagen: imagenItaliano3,
    nombreCurso: "Italiano intermedio",
    nivel: "B1",
    descripcionBreve:
      "Comprende mejor el italiano hablado y pratica la pronunciación para conversar con eficiencia y fluidez.",
    duracion: "Duración: 34 clases | Modalidad: Online",

    precio: "70.000",
  },
  {
    id: 10,
    categoria: "italiano",
    imagen: imagenItaliano4,
    nombreCurso: "Italiano avanzado",
    nivel: " C1",
    descripcionBreve:
      "Da un paso adelante con tu italiano: Mejora la gramática, escucha, vocabulario y más..",
    duracion: "Duración: 36 clases | Modalidad: Online",
    precio: "49.000",
  },
];
