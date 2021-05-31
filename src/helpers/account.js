export const getCustomerId = () => {
    return localStorage.getItem('customer_id')
}

export const getToken = () => {
    return localStorage.getItem('sessToken')
}

export const getOrderDatawithImage = (data = [], order = []) => {
 
    let finalData = []
    for (var singleProduct of order) {
        let img1 = ''
        let dataMatched = false
        for (var singleFilter of data) {
            if (singleProduct.product_id == singleFilter.id) {
                img1 = singleFilter.img1
                dataMatched = true
            }
        }

        if (dataMatched == true) {
            singleProduct['img1'] = img1
            finalData.push(singleProduct)
        }
    

    }
    return finalData
}
