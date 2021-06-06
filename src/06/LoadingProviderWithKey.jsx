// 공급자를 반환하는 커링함수
import React from "react";
import PropTypes from 'prop-types';

// 공급자의 기본 키값 정보를 공유한다.
export const DEFAULT_KEY = 'defaultLoadingKey';

// 공급자에게 구독하고자 하는 컨텍스트 데이터의 자료형을 공유한다.
export const contextPropTypes = {
    loading : PropTypes.bool,
    setLoading : PropTypes.func
};

// 컨텍스트 데이터의 기본 키값을 정한다.
export default (contextKey = DEFAULT_KEY) => {
    class LoadingProvider extends React.Component{
        constructor(props) {
            super(props);
            this.state = { loading : false };
            this.setLoading = this.setLoading.bind(this);
        }
        getChildContext(){
            return {
                // 자바스크립트 상식 : 객체의 key를 특정 변수로 사용하고 싶을 땐 객체의 해당 key를 []로 둘러싸고 []안에 해당 변수를 쓰면 된다.
                // 공급자의 컨텍스트 데이터를 반환한다.
                [contextKey] : {
                    loading : this.state.loading,
                    setLoading : this.setLoading
                }
            };
        };
        setLoading(loading){
            this.setState({ loading });
        };
        render() {
            return this.props.children
        }
    }

    LoadingProvider.childContextTypes = {
        [contextKey] : contextPropTypes
    };
    
    return LoadingProvider;
};