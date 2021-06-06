import React, {PureComponent} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";

// 초기 데이터가 state에 들어온다.
// 바뀔 데이터가 적혀 있는 action이라는 주문서를 reducer는 읽고 해당 주문서에 맞게 데이터를 바꾸는 작업을 한다.
const reducer = (state,action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading : payload
            };
        case 'SET_USER':
            return {
                ...state,
                user : payload
            };
        case 'RESET_LOADING':
            return {
                ...state,
                loading : false
            };
        default:
            return state;
    }
}

class ReduxApp03 extends PureComponent{
    store = createStore(
        reducer,
        {loading : false, name : '무야~호!'},
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    componentDidMount() {
        // 다수의 dispatch 함수가 차례대로 진행된다.
        this.store.dispatch({
            type : 'SET_LOADING',
            payload : true
        });
        this.store.dispatch({
            type : 'RESET_LOADING'
        });
        this.store.dispatch({
            type : 'SET_USER',
            payload : {
                name : 'Park',
                age : 20
            }
        });
    }

    render() {
        return(
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        )
    }
}
export default ReduxApp03