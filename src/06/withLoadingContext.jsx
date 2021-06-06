// 소비자(관찰자)를 반환하는 하이어오더 컴포넌트
import React from "react";
import PropTypes from 'prop-types';

export default WrappedComponent => {
    const {displayName, name : componentName} = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoadingContext(props, context) {
        const {loading, setLoading} = context;
        return (
            <WrappedComponent {...props} loading={loading} setLoading={setLoading} />
        );
    }
    WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`

    //소비자(관찰자)의 역할을 할 컴포넌트에 contextTypes속성을 추가하여 공급자에서 구독할 항목을 정의한다.
    // 하지만 매번 소비자(관찰자) 컴포넌트에 contextTypes 속성을 추가하면 불편하기에 하이어오더 컴포넌트에 입력하는 걸로 하자!
    WithLoadingContext.contextTypes = {
        loading : PropTypes.bool,
        setLoading : PropTypes.func
    };
    return WithLoadingContext;
}