import { all, takeEvery,put,call } from "@redux-saga/core/effects";
import { fetchUrl } from "../../features/task-lists/task-lists.slice";

const  fetchUrlFunc = async ()=>{
    let data = await fetch(fetchUrl);
    // let data2 = await data.json();
    // console.log("got data") 
    let data2 = data.json();
    return data2;
}

export  function* fetchAsyncWorker(){
    console.log("saga worker running");

    let data = yield call(fetchUrlFunc);
    console.log("sending data");
    yield put({type:"taskLists/fetchTaskListsAsync",payload: data})
}
export function* watchFetchAsync() {
    console.log("saga watcher running")
    yield takeEvery("fetchTaskListsAsync",fetchAsyncWorker)
}
export default function* rootSaga() {
    yield all([
       watchFetchAsync(),      
    ])
  }