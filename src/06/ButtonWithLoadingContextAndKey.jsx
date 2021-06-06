// 하이어오더 컴포넌트로 소비자 만들기
import React from "react";
import PropTypes from 'prop-types'
import Button from "../04/Button";
import withLoadingContextAndkey, {loadingPropTypes} from "./withLoadingContextAndkey";

function ButtonWithLoadingContext({children, loading, setLoading}) {
    return (
        <Button onPress={ () => setLoading(!loading) }>
            {loading ? '로딩 중' : children}
        </Button>
    );
}
ButtonWithLoadingContext.propTypes = {
    ...loadingPropTypes,
    children : PropTypes.string
}
export const ButtonWithDefaultLoadingContext =
    withLoadingContextAndkey('defaultLoadingKey')(ButtonWithLoadingContext);
export const ButtonWithLoading2Context =
    withLoadingContextAndkey('loading2')(ButtonWithLoadingContext);