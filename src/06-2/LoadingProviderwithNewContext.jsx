// 로딩 상태 컴포넌트를 제공하는 공급자 만들기
import React, {PureComponent} from "react";
const {Provider, Consumer} = React.createContext({});

export {Consumer};

export default class LoadingProvider extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {};
        this.setLoading = this.setLoading.bind(this);
    }
    setLoading(key, value){
        const newState = {[key] : value};
        this.setState(newState);
    }
    render() {
        const context = {
            ...this.state,
            setLoding : this.setLoading
        };
        return (
            <Provider value={context}>
                {this.props.children}
            </Provider>
        )
    }
}