import {put,call} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* getPicsSaga(action){
    const query=action.payload;
    try{
        yield put(actions.fetchDataAttempt());
        const res=yield call(api.getPics,query)
        yield call(delay,1000)
        yield put(actions.fetchDataSuccess(res))
    }
    catch(e){
        yield put(actions.fetchDataFail(e));
    }
}