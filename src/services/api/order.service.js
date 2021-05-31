import { fetch } from "../fetch.services";
import { API_PATH } from "../../constant/path"

export const getOrderList = (id) => {
  return fetch("get", API_PATH + 'type=orderListbyid&customer_id=' + id, {}, {});
}

export const getOrderDetails= (id) => {
  return fetch("get", API_PATH + 'type=orderDetailsbyid&order_id=' + id, {}, {});
}

export const getOrderProducts= (id) => {
  return fetch("get", API_PATH + 'type=orderProductDetailsbyid&order_id=' + id, {}, {});
}