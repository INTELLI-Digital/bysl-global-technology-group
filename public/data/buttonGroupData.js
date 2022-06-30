const data = [
  {
    id: 0,
    title: "Mission",
    link: "/mission",
  },
  {
    id: 1,
    title: "Purpose",
    link: "/purpose",
  },
  {
    id: 2,
    title: "Values",
    link: "/values",
  },
  {
    id: 3,
    title: "Culture",
    link: "/culture",
  },
];

const missionButtonData = data.filter((item) => item.link !== "/mission");
const purposeButtonData = data.filter((item) => item.link !== "/purpose");
const valuesButtonData = data.filter((item) => item.link !== "/values");
const cultureButtonData = data.filter((item) => item.link !== "/culture");

export {
  missionButtonData,
  purposeButtonData,
  valuesButtonData,
  cultureButtonData,
};
