// 서로 다른 컨텍스트 데이터를 가진 컴포넌트 만들기
import React, {PureComponent} from "react";
import LoadingProviderWithKey from "./LoadingProviderWithKey";
import {
    ButtonWithDefaultLoadingContext,
    ButtonWithLoading2Context
} from "./ButtonWithLoadingContextAndKey";
import ButtonWithConsumer from "./ButtonWithConsumer";

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey("loading2");

function TableComponent() {
    return (
        <div>
            <ButtonWithDefaultLoadingContext>컨텍스트1</ButtonWithDefaultLoadingContext>
            <ButtonWithLoading2Context>컨텍스트2</ButtonWithLoading2Context>
            <ButtonWithConsumer>다중 소비자 예제</ButtonWithConsumer>
        </div>
    );
}

export class HomePageComponentWithTwoProvider extends PureComponent{
    render(){
        return(
            <LoadingProvider1>
                <LoadingProvider2>
                    <TableComponent />
                </LoadingProvider2>
            </ LoadingProvider1>
        );
    }
}

export default HomePageComponentWithTwoProvider;