const getItem = () => JSON.parse(sessionStorage.getItem("serviceId"));
const setItem = (param) =>
  sessionStorage.setItem("serviceId", JSON.stringify(param));
const getLegalState = () => JSON.parse(sessionStorage.getItem("legalId"));
const setLegalState = (param) =>
  sessionStorage.setItem("legalId", JSON.stringify(param));

const getState = () => {
  if (
    typeof window !== "undefined" &&
    sessionStorage.hasOwnProperty("navState")
  ) {
    return JSON.parse(sessionStorage.getItem("navState"));
  } else return [];
};

// const getState = () => JSON.parse(sessionStorage.getItem("navState"));
const setState = (param) =>
  sessionStorage.setItem("navState", JSON.stringify(param));

export { getItem, setItem, getState, setState, getLegalState, setLegalState };
