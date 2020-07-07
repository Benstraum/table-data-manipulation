import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'




function* rootSaga(){
    yield takeEvery('GET_TABLE_DATA',getData)
}

//first time dealing with cors. used this heroku app as a form of proxy to get past the CORS same origin issue.
// I ended up hosting my own cors-anywhere on heroku to act as a proxy for the requested information.
   function* getData(){
      let url = 'https://www.slickcharts.com/sp500/returns/history.json'
        const responsePayload = yield axios.get(`https://aqueous-coast-44415.herokuapp.com/${url}`)
        .catch(err=>console.log('error in saga', err))
    yield put({ type:'SET_TABLE_DATA', payload: responsePayload.data})
   }

    export default rootSaga