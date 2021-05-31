import * as types from '../type/product.types'

export const increaseQuanity = (data) => {
    return {
        type: types.INCREASE_QTY,
        payload: data
    }
}

export const decreaseQuanity = (data) => {
    return {
        type: types.DECREASE_QTY,
        payload: data
    }
}

// export const insertTestOneData = (data) => {
//    // console.log(data)
//     return {
//         type:types.TEST_ONE_INSERT,
//         payload:data
//     }
// }

// export const getTestOneApiData = (data) => {
    
//     return {
//         type: types.TEST_ONE_API_DATA,
//         payload:data
//     }
// }

// let testOneNames = []

// export const getData = () => {
//     return testOneNames
// }



// export const insertOneData = (data) => {
//     return ( dispatch, getState ) => {
//         testOneNames.push(data)
//         dispatch(insertTestOneData(testOneNames))
//     }
// }


// export const getTestOneData = () => {
//     return ( dispatch, getState ) => {
//         return service.geTestOneData()
//       .then(async res => {
        
//         dispatch(getTestOneApiData(res.data))
//       })
//       .catch(error => {
//         console.log('ACTION API ERROR:: ', error)
//       });
//     }
// }