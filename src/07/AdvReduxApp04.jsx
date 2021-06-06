import React, {PureComponent} from "react";
import {Provider} from 'react-redux';
import configureStore from "./configureStore";
import {setCollection} from "./actions/01CollectionActions";

class AdvReduxApp04 extends PureComponent{
    store = configureStore({loading : false})
    componentDidMount() {
        this.store.dispatch(
            setCollection([
                {id : 1, name : 'jin', age : 10},
                {id : 2, name : 'young', age : 20}
            ])
        );
        const {collection} = this.store.getState();
        const {ids, entities} = collection;
        const originalPayload = ids.map(id => entities[id]);
        console.log(originalPayload);
    }
    render() {
        return <Provider store={this.store}>리덕스 예제</Provider>
    }
}
export default AdvReduxApp04;