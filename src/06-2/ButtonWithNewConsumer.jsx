// 동일한 하나의 공급자를 구독하는 세개의 소비자
import React from "react";
import PropTypes from 'prop-types';
import Button from "../04/Button";
import {Consumer} from "./LoadingProviderwithNewContext";

function ButtonWithNewConsumer({children}) {
    return(
        <React.Fragment>
            {/*<Consumer*/}
            {/*    children={ value => (*/}
            {/*        <Button onPress={ () => value.setLoading('loading', !value.loading)}>*/}
            {/*            {value.loading ? '로딩 중' : children}*/}
            {/*        </Button>*/}
            {/*    )}*/}
            {/*/>*/}
            {/*<Consumer*/}
            {/*    children={ ({ loading2 = false, setLoading }) => (*/}
            {/*        <Button onPress={ () => setLoading('loading2', !loading2)}>*/}
            {/*            {loading2 ? '로딩 중' : children}*/}
            {/*        </Button>*/}
            {/*    )}*/}
            {/*/>*/}
            {/*<Consumer */}
            {/*    children={ ({ loading = false, loading2 = false }) => (*/}
            {/*        <Button>*/}
            {/*            {loading && loading2 ? '로딩 중' : children}*/}
            {/*        </Button>*/}
            {/*    )}*/}
            {/*/>*/}
            <Consumer>
                {/*
                    자식 프로퍼티( 여기서는 children을 의미)는 엘리먼트 사이에 배치하여 전달할 수 있다.
                    아래와 같이 작성한 코드가 제대로 Consumer를 이용했다고 할 수 있다.
                    value에는 구독하는 컨텍스트 데이터가 들어온다.
                */}
                { value => (
                    <Button onPress={ () => value.setLoading('loading', !value.loading)}>
                        {value.loading ? '로딩 중' : children}
                    </Button>
                )}
            </ Consumer>
            <Consumer>
                {/* 비구조화 할당을 통해 this.state의 각 key의 값을 각각 loading2, setLoading에 할당한다. */}
                {/* 하지만 this.state의 key 중 loading2는 없으며 여기서 loading2의 값을 할당했기 때문에 loading2는 false를 할당받는다. */}
                {({ loading2 = false, setLoading }) => (
                    <Button onPress={ () => setLoading('loading2', !loading2)}>
                        {loading2 ? '로딩 중' : children}
                    </Button>
                )}
            </Consumer>
            <Consumer>
                {({ loading = false, loading2 = false }) => (
                    <Button>
                        {loading && loading2 ? '로딩 중' : children}
                    </Button>
                )}
            </Consumer>
        </React.Fragment>
    );
}

ButtonWithNewConsumer.propTypes = {
    label : PropTypes.string
};

export default ButtonWithNewConsumer