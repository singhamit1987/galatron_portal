export const getFilterData = (data, filterName) => {
    let uniqueFilter = []
    for(var val of data) {
        console.log(val[filterName])
       if(val[filterName] == '') {
           continue
       }

       uniqueFilter.push(val[filterName])
    }
    let uniqueData = [...new Set(uniqueFilter)]
    console.log(uniqueData)
    return uniqueData
}  