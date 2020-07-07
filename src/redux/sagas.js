import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'




function* rootSaga(){
    yield takeEvery('GET_TABLE_DATA',getData)
}

//first time dealing with cors. used this heroku app as a form of proxy to get past the CORS same origin issue.
   function* getData(){
      let url = 'https://www.slickcharts.com/sp500/returns/history.json'
        const responsePayload = yield axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
    yield put({ type:'SET_TABLE_DATA', payload: responsePayload.data})
   }

    export default rootSaga