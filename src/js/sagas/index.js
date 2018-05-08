import { takeLatest, fork, all,takeEvery } from 'redux-saga/effects';
import * as types from '../constants';
// import fetchDataSaga from './fetchDataSaga';
import getPicsSaga from './getPicsSaga';

// function* watchFetchData() {
//   yield takeLatest(types.FETCH_DATA, fetchDataSaga);
// }

function* watchGetPics(){
  //yield takeLatest(types.FETCH_DATA,getPicsSaga)
  yield takeLatest(types.FETCH_DATA,getPicsSaga)
}


export default function* rootSaga() {
  yield all([
   // fork(watchFetchData)
   fork(watchGetPics)
    // another action listener,
  ]);
}
