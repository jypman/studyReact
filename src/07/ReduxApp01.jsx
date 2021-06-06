import React, {PureComponent} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";

class ReduxApp01 extends PureComponent{
    store = createStore(
        // reducer는 아무 일도 하지 않는다.
        state => state,
        {loading : false, name : '무야~호!'},
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    render() {
        return(
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        )
    }
}
export default ReduxApp01