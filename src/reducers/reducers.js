import { CHANGE_VIEW_MODE, CHANGE_LANG } from "../actions/actions";

const localStorageKey = "web-sayfam";

// başlangıç değerleri
const initialValues = {
  isDarkMode: false,
  language: "tr"
};

// local storageye yazar.
const writeLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

// local storageden okur.
const readLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

// başlangıç değerleri getir
// local storagede varsa oradan yoksa yukarıdaki değerleri başlangıç değerini dönelim
const getInitialValues = (key) => {
  const value = localStorage.getItem(key);

  if (value) {
    return readLocalStorage(key);
  }
  else {
    return initialValues;
  }
}

export function reducer(state = getInitialValues(localStorageKey), action) {
  let newState;

  if (action.type === CHANGE_LANG) {
    // console.log("Reducer", CHANGE_LANG);
    newState = {
      ...state,
      language: action.payload // tr/en gelicek burası
    };

    writeLocalStorage(localStorageKey, newState);

    return newState;

  } else if (action.type === CHANGE_VIEW_MODE) {
    // console.log("Reducer", CHANGE_VIEW_MODE);
    newState = {
      ...state,
      isDarkMode: !state.isDarkMode // mevcutun tersini alarak devam ettik
    };

    writeLocalStorage(localStorageKey, newState);

    return newState;

  }
  else {
    return state;
  }
}