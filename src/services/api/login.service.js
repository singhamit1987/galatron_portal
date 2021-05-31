import { fetch } from "../fetch.services";
import { API_PATH } from "../../constant/path";

export const getLogin = (email, password) => {
    return fetch("get", API_PATH + 'type=logincheck&username='+ email + '&passwd=' + password, {}, {});
}