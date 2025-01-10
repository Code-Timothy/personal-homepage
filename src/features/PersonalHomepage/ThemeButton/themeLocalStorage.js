export const getThemeFromLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key));


export const saveThemeInLocalStorage = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));
