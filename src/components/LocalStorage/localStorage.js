const getDatafromlocalStorage = () => {
  let data = localStorage.getItem("applied-Id");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const setDataToLocalstorage = (id) => {
  const prevIds = getDatafromlocalStorage();
  const exist = prevIds.find((prevId) => prevId == id);
  if (!exist) {
    prevIds.push(id);
  }
  localStorage.setItem("applied-Id", JSON.stringify(prevIds));
};

export { getDatafromlocalStorage, setDataToLocalstorage };
