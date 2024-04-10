const setLocalStorage = (key: string, value: string) => {
  if (!key || !value) return;

  localStorage.setItem(key, value);
};

const getLocalStorage = (key: string) => {
  if (!key) return;

  return localStorage.getItem(key);
};

const removeLocalStorage = (key: string) => {
  if (!key) return;

  localStorage.removeItem(key);
};

export { setLocalStorage, getLocalStorage, removeLocalStorage };
