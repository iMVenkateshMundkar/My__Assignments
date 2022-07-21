const getLocalLoginData = (key) => {
  if (key) {
    const data = localStorage.getItem(key);
    return data;
  }
};

const saveLocalLoginData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

export { getLocalLoginData, saveLocalLoginData };
