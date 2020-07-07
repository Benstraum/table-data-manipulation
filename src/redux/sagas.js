import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'



// CORS error upon get request. will use only reducers for now
function* rootSaga(){
    yield takeEvery('GET_TABLE_DATA',getData)
}
function* getData() {
    const responsePayload = yield axios.get(`https://www.slickcharts.com/sp500/returns/history.json`)
    console.log('in saga get', responsePayload )
    yield put({ type:'SET_TABLE_DATA', payload: responsePayload})
}
    export default rootSaga