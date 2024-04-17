const getIdFromLS = () => {
  const savedID = localStorage.getItem("cart");
  if (savedID) {
    return JSON.parse(savedID);
  }
  return [];
};
const saveIDinLS = (id) => {
  const savedID = getIdFromLS("cart");
  if (!savedID.includes(id)) {
    savedID.push(id);
    localStorage.setItem("cart", JSON.stringify(savedID));
  }
};
export { getIdFromLS, saveIDinLS };
