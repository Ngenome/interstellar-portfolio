function pngmerger(base) {
  return `${"/projects"}/${base}${".png"}`;
}

const projects = [
  {
    id: 1,
    cover: "/dissolvemanagement.jpg",
    info: "",
    images: [
      "/dissolvemanagement.jpg",
      "/dissolveweb.jpg",
      "/dissolve_laptop.png",
    ],
    descriptionTitle:
      "A Design & Development project for Dissolve Management Systems",
    description:
      "This  are designs for the dissolve management application, made with the figma design software.",
    link: "https://www.figma.com/file/KjjsCYddHrhch9XnGdiQ5R/Dissolve-Management",
    tools: ["Figma", " React", "Python", "Django"],
  },
  {
    id: 2,
    cover: pngmerger("dropp-design"),
    info: "",
    images: [
      pngmerger("dropp-1"),
      pngmerger("dropp-3"),
      pngmerger("dropp-4"),
      pngmerger("dropp-5"),
      pngmerger("dropp-6"),
      pngmerger("dropp-7"),
      pngmerger("dropp-8"),
      pngmerger("dropp-9"),
    ],
    descriptionTitle: "A design project from",
    description:
      "This  are designs for the dissolve management application, made with the figma design software",
    link: "https://www.figma.com/file/G9OW9Mz0zYGWs7jyPENSO3/Droppms",
    tools: ["figma", "react-native"],
  },
  {
    id: 3,
    info: "",
    cover: pngmerger("Repent-App-Cover"),
    images: [
      pngmerger("repent-app-1"),
      pngmerger("repent-app-2"),
      pngmerger("repent-app-3"),
      pngmerger("repent-app-4"),
      pngmerger("repent-app-5"),
      pngmerger("repent-app-6"),
      pngmerger("repent-app-7"),
    ],
    descriptionTitle: "A design project from",
    description:
      "This  are designs for the dissolve management application, made with the figma design software",
    link: "https://www.figma.com/file/7R41lIyqU68opMjqvy519L/Needs",
    tools: ["react-native", "Django"],
  },
  {
    id: 4,
    cover: pngmerger("repent-backend-2"),
    info: "",
    images: [
      pngmerger("repent-backend-1"),
      pngmerger("repent-backend-2"),
      pngmerger("repent-backend-3"),
      pngmerger("repent-backend-4"),
    ],
    descriptionTitle: "A design project from",
    description:
      "This is the app backend for the repent member registration app, that supports user authentication and has a user friendly interface to add the members and their details",
    link: "http://repent-backend.herokuapp.com/admin",
    tools: ["Django", "Python", "Django Rest Framework"],
  },
  {
    id: 6,
    cover: pngmerger("ribrad-cover"),
    info: "",
    images: [
      pngmerger("ribrad-1"),
      pngmerger("ribrad-2"),
      pngmerger("ribrad-3"),
      pngmerger("ribrad-4"),
      pngmerger("ribrad-5"),
      pngmerger("ribrad-6"),
      pngmerger("ribrad-7"),
      pngmerger("ribrad-8"),
    ],
    descriptionTitle: "Laudry & Shopping app development",
    description:
      "This is a laundry delivery services application for Ribrad Laudry. The App enables customers to have their cloths washed as well as have the chance of having them delivered to them at their locations. It also has a shopping where you can buy clothing",
    link: "",
    tools: ["react-native", "strapi"],
  },
];

export default projects;
