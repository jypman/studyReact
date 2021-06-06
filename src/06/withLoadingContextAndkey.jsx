// (수정) 소비자를 반환하는 하이어오더 컴포넌트
import React from "react";
import {DEFAULT_KEY, contextPropTypes} from "./LoadingProviderWithKey";

export const loadingPropTypes = contextPropTypes;

// 공급자의 컨텍스트 데이터 키값을 인자로 받는다.
export default (contextKey = DEFAULT_KEY) => WrappedComponent => {
    const { displayName, name : componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoadingContext(props, context) {
        const {loading, setLoading} = context[contextKey];
        return (
            <WrappedComponent {...props} loading={loading} setLoading={setLoading}/>
        );
    }
    WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`
    WithLoadingContext.contextTypes = {
        [contextKey] : contextPropTypes
    };
    return WithLoadingContext;
};