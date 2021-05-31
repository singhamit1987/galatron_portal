import { fetch } from "../fetch.services";
import { API_PATH } from "../../constant/path"

export const getCategoriesData = () => {
  return fetch("get", API_PATH + 'type=categories', {}, {});
}