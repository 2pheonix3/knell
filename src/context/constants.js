export const HOST = process.env.SERVER_URL;
export const API_URL = `${HOST}/api`;
export const AUTH_ROUTES = `${API_URL}/auth`;
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;

export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;


export const reducerCases = {
    SET_USER: "SET_USER",
    TOGGLE_LOGIN_MODAL: "TOGGLE_LOGIN_MODAL",
    TOGGLE_SIGNUP_MODAL: "TOGGLE_SIGNUP_MODAL",
    CLOSE_AUTH_MODAL: "CLOSE_AUTH_MODAL",
    SET_SELLER: "SET_SELLER",
    SWITCH_MODE: "SWITCH_MODE",
    SET_GIG_DATA: "SET_GIG_DATA",
    HAS_USER_ORDERED_GIG: "HAS_USER_ORDERED_GIG",
    ADD_REVIEW: "ADD_REVIEW",
  };