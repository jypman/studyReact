import React, {PureComponent} from "react";
import {Provider} from 'react-redux';
import configureStore from "./configureStore";

class AdvReduxApp01 extends PureComponent{
    // 스토어를 관리하는 파일을 임포트하여 스토어를 관리하는 함수를 사용한다.
    store = configureStore({loading : false})
    componentDidMount() {
        this.store.dispatch({
            type : 'SET_LOADING',
            payload : true
        })
        this.store.dispatch({
            type: 'RESET_LOADING',
        })
        this.store.dispatch({
            type : 'SET_USER',
            payload : {name : 'Park', age : 20}
        })
    }
    render() {
        return <Provider store={this.store}>리덕스 예제</Provider>
    }
}
export default AdvReduxApp01