import { fetch } from "../fetch.services";
import { API_PATH } from "../../constant/path"

export const getRegistrationData = (name, email, mobile, password) => {
  return fetch("get", API_PATH + 'type=customerReg&firstname=' + name + '&email=' + email + '&pwd=' + password + '&mobile=' + mobile , {}, {});
}