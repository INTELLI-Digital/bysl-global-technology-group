const getItem = () => JSON.parse(sessionStorage.getItem("serviceId"));
const setItem = (param) =>
  sessionStorage.setItem("serviceId", JSON.stringify(param));

const getState = () => JSON.parse(sessionStorage.getItem("navState"));
const setState = (param) =>
  sessionStorage.setItem("navState", JSON.stringify(param));

export { getItem, setItem, getState, setState };
