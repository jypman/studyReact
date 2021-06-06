import React, {PureComponent} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";

class ReduxApp02 extends PureComponent{
    store = createStore(
        // reducer는 아무 일도 하지 않는다.
        state => state,
        {loading : false, name : '무야~호!'},
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    // 바꿀 데이터를 action이라는 주문서에 적어 둔다.
    componentDidMount() {
        this.store.dispatch({
            type : 'SET_LOADING',
            payload : true
        })
    }

    render() {
        return(
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        )
    }
}
export default ReduxApp02