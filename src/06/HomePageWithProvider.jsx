// context 공급자 구현
import React, {PureComponent} from "react";
import LoadingProvider from "./LoadingProvider";
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import Button from "../04/Button";

function RowBComponent() {
    return <Button>버튼</Button>;
}

// 소비자(관찰자)를 출력
function RowCComponent() {
    return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>
}

function TableComponent() {
    return(
        <div>
            <RowBComponent />
            <RowCComponent />
        </div>
    );
}

class HomePageWithProvider extends PureComponent{
    render() {
        return(
            <LoadingProvider>
                <TableComponent />
                <ButtonWithLoadingContext label="상태 변경" />
            </LoadingProvider>
        );
    }
}
export default HomePageWithProvider;