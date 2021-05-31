import { fetch } from "../fetch.services";
import {API_PATH} from "../../constant/path";

export const getProfiledata = (token) => {
    return fetch("get", API_PATH + 'type=getVendor&sessToken='+token, {}, {});
}
