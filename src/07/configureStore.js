import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";

// 스토어를 관리하는 파일이다.
// 아래의 함수의 이름은 다른 파일에서 이 파일을 임포트할 때 결정된다.
// initStates라는 인자에는 state가 변경되기 전의 초기 state 값이 들어온다.
export default initStates => createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools()
);