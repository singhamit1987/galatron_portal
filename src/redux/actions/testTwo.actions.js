import * as types from '../../constants/types'
import * as service from '../../services/API/testTwo.service'
import { apiMiddleware } from '../../middlewares/test.middleware'

export const insertTestTwoData = (data) => {
   // console.log(data)
    return {
        type:types.TEST_TWO_INSERT,
        payload:data
    }
}

export const getTestTwoApiData = (data) => {
    return {
        type: types.TEST_TWO_API_DATA,
        payload:data
    }
}


let testTwoNames = []

export const getData = () => {
    return testTwoNames
}

export const insertTwoData = (data) => {
    return ( dispatch, getState ) => {
        testTwoNames.push(data)
        dispatch(insertTestTwoData(testTwoNames))
    }
}

export const getTestTwoData = () => {
    return ( dispatch, getState ) => {
        return service.geTestTwoData()
      .then(async res => {
        dispatch(getTestTwoApiData(res.data))
      })
      .catch(error => {
        console.log('ACTION API ERROR:: ', error)
      });
    }
}


export const postTestTwoData = (data) => {
    return ( dispatch, getState ) => {
        return service.postTestTwoData(data)
      .then(async res => {
        let response = {
            type:types.POSTS,
            data:res.data
        }
       
        apiMiddleware(response).then((solve)=>{
          alert(JSON.stringify(solve))
          //  console.log(solve)
        }).catch((err) => {
            console.log(err)
        }) 
        
      })
      .catch(error => {
        console.log('TEST POST API DATA ERROR:: ', error)
      });
    }
}
