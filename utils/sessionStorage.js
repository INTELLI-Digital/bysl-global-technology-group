const getItem = () => JSON.parse(sessionStorage.getItem("serviceId"));
const setItem = (param) =>
  sessionStorage.setItem("serviceId", JSON.stringify(param));

export { getItem, setItem };
