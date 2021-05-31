import { fetch } from "../fetch.services";
import {API_PATH} from "../../constant/path";

export const getCustomerprofile = (uid) => {
    return fetch("get", API_PATH + 'type=customerProfile', {uid}, {});
}