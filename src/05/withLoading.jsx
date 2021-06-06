import React from "react";

export default function(loadingMessage) {
    return function withLoading(WrappedComponent) {
        const { displayName, name : componentName } = WrappedComponent;
        const wrappedComponentName = displayName || componentName;

        function withLoading({isLoading, ...otherProps}) {
            if(isLoading) return loadingMessage;
            return(
                <WrappedComponent {...otherProps} />
            );
        }
        // 클래스 형태인 확장컴포넌트에서 static displayName로 확장 컴포넌트의 이름을 정의하는 것과 같다.
        withLoading.displayName = `withLoading(${wrappedComponentName})`
        return withLoading;
    }
}