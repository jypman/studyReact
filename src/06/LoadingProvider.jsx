// 공급자 컴포넌트
import React from "react";
import PropTypes from 'prop-types';

class LoadingProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = { loading : false };
        this.setLoading = this.setLoading.bind(this);
    }
    // 공급자가 제공하는 데이터가 들어 있는 함수
    getChildContext(){
        return{
            loading : this.state.loading,
            setLoading : this.setLoading
        };
    }
    // 소비자(관찰자)에 전달하여 데이터를 변경하도록 하는 콜백함수
    setLoading(loading){
        this.setState({loading});
    }
    render() {
        return this.props.children;
    }
}
// 공급자가 제공하는 데이터의 자료형
LoadingProvider.childContextTypes = {
    loading : PropTypes.bool,
    setLoading : PropTypes.func
};
export default LoadingProvider;