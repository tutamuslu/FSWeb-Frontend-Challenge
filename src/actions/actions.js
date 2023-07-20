
export const CHANGE_LANG = "CHANGE_LANG";
export const CHANGE_VIEW_MODE = "CHANGE_VIEW_MODE";

export function changeLang(lang) {
    return { type: CHANGE_LANG, payload: lang };
}

export function changeViewMode() {
    return { type: CHANGE_VIEW_MODE };
}