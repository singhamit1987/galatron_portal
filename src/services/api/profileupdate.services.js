import { fetch } from "../fetch.services";
import { API_PATH } from "../../constant/path";

export const getProfileupdate = (firstname, mobile, pwd) => {
    return fetch("get", API_PATH + 'type=profileUpdate&username'+firstname+'&mobile='+mobile+'&password='+pwd, {},{});
}