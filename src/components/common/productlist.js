import { NavLink } from 'react-router-dom'
import { CATEGORY_JSON } from '../../constant/translate'
import { CURRENCY } from '../../constant/currency'

export const getProductList = (data, diameter = null, type = null, features = null, functions = null) => {
    return data
        .filter(function(pd){
            if(diameter == null || diameter == '') {
                return pd
            } else {
               if(pd.diameter == diameter) {
                   return pd
               }
            }
             
        })
        .filter(function(pd){
            if(type == null || type == '') {
                return pd
            } else {
               if(pd.types == type) {
                   return pd
               }
            }
             
        })
        .filter(function(pd){
            if(features == null || features == '') {
                return pd
            } else {
               if(pd.features == features) {
                   return pd
               }
            }
             
        })
        .filter(function(pd){
            if(functions == null || functions == '') {
                return pd
            } else {
               if(pd.functions == functions) {
                   return pd
               }
            }
             
        })
        .map(function (prod) {
            return (
                <li><div class="p_img">
                    {prod.img1 == 'NULL'? <img src='../images/no_image.jpg' alt={prod.title} /> : <img src={prod.img1} alt={prod.title} /> }
                    </div><div class="p_name"><a>{prod.title}</a></div><div class="p_price">{CURRENCY} {prod.price}</div>

                    <div class="p_hover">
                        <div class="p_button">
                            <NavLink to={'/product/' + prod.page_slug + '/' + prod.id}>{CATEGORY_JSON.view_details}</NavLink>
                        </div>
                        <div class="p_icon">
                            <ul>
            {prod.technical_sheet == 'NULL'?
            null : <li><a href={prod.technical_sheet} target="_blank" download><img src="../images/icon_edit.png" alt="icon" /></a></li>
            }

            {prod.technical_drawing == 'NULL'?
            null :<li><a href={prod.technical_drawing} target="_blank" download><img src="../images/icon_details.png" alt="icon" /></a></li>
            }
            {prod.img1 == 'NULL'?
            null : <li><a href={prod.img1} target="_blank" download><img src="../images/icon_download.png" alt="icon" /></a></li>
            }
                            </ul>
                        </div>
                    </div>

                </li>
            )
        })
}