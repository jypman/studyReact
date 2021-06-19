// redux-thunk를 미들웨어에 추가하기

import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "../reducers";
import thunk from "redux-thunk";
import {middleware as reduxPackMiddleware} from 'redux-pack';
import notificationEffects from "../middlewares/notificationEffects";
import searchFilterEffects from "../middlewares/searchFilterEffects";
import routerEffects from "../middlewares/routerEffects";

export default initStates => createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
        applyMiddleware(thunk, reduxPackMiddleware, notificationEffects, searchFilterEffects, routerEffects)
    )
);

// 커스텀 미들웨어 적용 전

// import {createStore, combineReducers} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
// import reducers from '../reducers';
//
// export default initStates => createStore(
//     combineReducers(reducers),
//     initStates,
//     composeWithDevTools()
// )

// 한 개의 커스텀 미들웨어 적용 후

// import {createStore, combineReducers, applyMiddleware} from "redux";
// import reducers from "../reducers";
//
// const customMiddleware = store => nextRunner => action => {
//     console.log('리듀서 실행 전 액션객체',action);
//     console.log('리듀서 실행 전 저장소 상태', store.getState());
//     const result = nextRunner(action);
//     console.log('리듀서 실행 후 저장소 상태', store.getState());
//     return result;
// }
// export default initStates => createStore(
//     combineReducers(reducers),
//     initStates,
//     applyMiddleware(customMiddleware)
// )

// 커스텀 다중 미들웨어 적용 후
// 실행 순서 : 1,2,3,6,7,8,9,10,4,5

// import {createStore, combineReducers, applyMiddleware} from "redux";
// import reducers from "../reducers";
//
// const customMiddleware = store => nextRunner => action => {
//     console.log('리듀서 실행 전 액션객체',action); // 1
//     console.log('리듀서 실행 전 저장소 상태', store.getState()); // 2
//     const result = nextRunner(action); // 3
//     console.log('리듀서 실행 후 저장소 상태', store.getState()); // 4
//     return result; // 5
// }
// const customMiddleware2 = store => nextRunner => action => {
//     console.log('미들웨어2 실행 전 액션객체',action); // 6
//     console.log('미들웨어2 실행 전 저장소 상태', store.getState()); // 7
//     const result = nextRunner(action); // 8
//     console.log('미들웨어2 실행 후 저장소 상태', store.getState());  // 9
//     return result; // 10
// }
//
// export default initStates => createStore(
//     combineReducers(reducers),
//     initStates,
//     applyMiddleware(customMiddleware,customMiddleware2)
// )

// 커스텀 미들웨어 적용하여 리듀서 실행 전 특정 액션 값 바꾸기

// import {createStore, combineReducers, applyMiddleware} from "redux";
// import reducers from "../reducers";
// import {SET_TRANSACTION_LIST} from "../actions/transactionActions";
//
// const customMiddleware1 = () => nextRunner => action => {
//     if(action.type === SET_TRANSACTION_LIST){
//         return nextRunner({
//             ...action,
//             payload : [{
//                 id : 0,
//                 code : 'DOIT',
//                 name : '두잇코인(DOIT)',
//                 totalPrice : 100000000,
//                 currentPrice : 25000,
//                 datetime : '현재시간'
//             }]
//         });
//     }
//     return nextRunner(action);
// }
// export default initStates => createStore(
//     combineReducers(reducers),
//     initStates,
//     applyMiddleware(customMiddleware1)
// )

// 커스텀 다중 미들웨어와 리덕스 크롬 확장도구 조합하기

// import {createStore, combineReducers, applyMiddleware} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
// import reducers from "../reducers";
//
// const customMiddleware = store => nextRunner => action => {
//     console.log('리듀서 실행 전 액션객체',action); // 1
//     console.log('리듀서 실행 전 저장소 상태', store.getState()); // 2
//     const result = nextRunner(action); // 3
//     console.log('리듀서 실행 후 저장소 상태', store.getState()); // 4
//     return result; // 5
// }
// const customMiddleware2 = store => nextRunner => action => {
//     console.log('미들웨어2 실행 전 액션객체',action); // 6
//     console.log('미들웨어2 실행 전 저장소 상태', store.getState()); // 7
//     const result = nextRunner(action); // 8
//     console.log('미들웨어2 실행 후 저장소 상태', store.getState());  // 9
//     return result; // 10
// }
//
// export default initStates => createStore(
//     combineReducers(reducers),
//     initStates,
//     composeWithDevTools(
//         applyMiddleware(customMiddleware, customMiddleware2)
//     )
// );