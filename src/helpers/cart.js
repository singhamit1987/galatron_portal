export const addToCart = (id, qty = 1) => {
    var data = JSON.parse(localStorage.getItem('saveCartId')) || []
    let cartObj = { id: id, qty: qty }
    let dublicate = false
    for (var cObj of data) {
        if (cObj.id == id) {
            cObj.qty += qty
            dublicate = true
        }
    }
    if (dublicate == false) {
        data.push(cartObj)
    }
    localStorage.setItem('saveCartId', JSON.stringify(data))
    //  window.location.reload(false)
}

export const addQuantity = (id, qty = 1) => {
    var data = JSON.parse(localStorage.getItem('saveCartId')) || []
    let cartObj = { id: id, qty: qty }
    let dublicate = false
    for (var cObj of data) {
        if (cObj.id == id) {
            cObj.qty += qty
            dublicate = true
        }
    }
    if (dublicate == false) {
        data.push(cartObj)
    }
    localStorage.setItem('saveCartId', JSON.stringify(data))
    window.location.reload(false)
}

export const removeQuantity = (id, qty_ip) => {
    if (qty_ip > 1) {

        var data = JSON.parse(localStorage.getItem('saveCartId')) || []
        for (var cObj of data) {
            if (cObj.id == id) {
                cObj.qty -= 1
            }
        }
        //console.log(data)
        localStorage.setItem('saveCartId', JSON.stringify(data))
        window.location.reload(false)


    }
}

export const getFilterProduct = (data = [], filter = []) => {
    let finalData = []
    for (var singleProduct of data) {
        let qty = 0
        let img1 = ''
        let dataMatched = false
        for (var singleFilter of filter) {
            if (singleProduct.id == singleFilter.id) {
                qty = singleFilter.qty
                img1 = singleFilter.img1
                dataMatched = true
            }
        }

        if (dataMatched == true) {
            singleProduct['qty'] = qty
            singleProduct['img_new'] = img1
            finalData.push(singleProduct)
        }
        // console.log('------------------')
        // console.log(finalData)

    }
    return finalData
}

export const getProductPrice = (data) => {
    let total = 0
    for (var price of data) {
        total += parseInt(price.price) * price.qty
    }
    return total
}

export const getShippingCost = (location) => {
    if (location == 'it') {
        return 10
    } else  if (location == 'es') {
        return 20
    } else {
        return 30
    }
}

export const cartStoredData = () => {
    return (JSON.parse(localStorage.getItem('saveCartId')))
}


export const clearCart = () => {
    localStorage.removeItem('saveCartId')
    window.location.reload(false)
}


export const removeProduct = (id) => {
    var data = JSON.parse(localStorage.getItem('saveCartId')) || []

    var index = data.findIndex(function (o) {
        return o.id === id;
    })
    if (index !== -1) data.splice(index, 1);

    localStorage.setItem('saveCartId', JSON.stringify(data));
    window.location.reload();
}