import React, {PureComponent} from "react";
import {Provider} from "react-redux";
import configureStore from "./configureStore";
import PresentationComponent from "./PresentationComponent";
import ContainerComponent from "./container/ContainerComponent";
import DispatchContainer03 from "./container/DispatchContainer03";

class AdvReduxApp08 extends PureComponent{
    store = configureStore({loading : false});
    render() {
        return (
            <Provider store={this.store}>
                화면 컴포넌트 :
                <PresentationComponent userName="화면 컴포넌트" />
                <br/>
                데이터 컴포넌트 :
                <ContainerComponent id={2} />
                <br/>
                최종 액션 컴포넌트 :
                <DispatchContainer03 />
            </Provider>
        )
    }
}
export default AdvReduxApp08;
