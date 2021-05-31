import { NavLink } from "react-router-dom"
import { DOMAIN_PATH } from '../../constant/path'

export const getCategories = (data, lang='en') => {
    return data.map(function(cat){
        if(lang == 'es') {
            return (   
                <li><NavLink to={'/category/'+cat.id}>{cat.catname_es}</NavLink></li> 
            )
        } else if(lang == 'it') {
            return (   
                <li><NavLink to={'/category/'+cat.id}>{cat.catname_it}</NavLink></li> 
            )
        } else if(lang == 'ch') {
            return (   
                <li><NavLink to={'/category/'+cat.id}>{cat.catname_ch}</NavLink></li> 
            )
        } else {
            return (   
                <li><NavLink to={'/category/'+cat.id}>{cat.name}</NavLink></li> 
            )
        }
        
    })        
}