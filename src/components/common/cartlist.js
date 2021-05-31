import { getProductData } from '../../services/api/product.service'
import {getFilterProduct, cartStoredData} from '../../helpers/cart'

export const getCartList = () => {
   return getProductData()
    .then((res)=>{
         let returnData = []
        if(!(cartStoredData() == null)){
            returnData = cartStoredData()
        }
     //   console.log(returnData)
        return getFilterProduct(res.data.data, returnData)
    })
   
}