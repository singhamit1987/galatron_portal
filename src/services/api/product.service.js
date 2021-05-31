import { fetch } from "../fetch.services";
import { API_PATH } from "../../constant/path"
import { getCurrentLanguage } from '../../helpers/common'
 

export const getProductData = () => {
  return fetch("get", API_PATH + 'type=products'+'&lang='+getCurrentLanguage(), {}, {});
}

export const getProductById = (id) => {
  return fetch("get", API_PATH + 'type=productbyProdId&product_id='+id+'&lang='+getCurrentLanguage(), {} , {});
}

export const getProductByCatId = (id) => {
  return fetch("get", API_PATH + 'type=productbyCatId&category_id='+id+'&lang='+getCurrentLanguage(), {}, {});
}