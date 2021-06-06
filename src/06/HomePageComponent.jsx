// context 공급자 구현
import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
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

class HomePageComponent extends PureComponent{
    constructor(props) {
        super(props);
        this.state = { loading : false };
        this.setLoading = this.setLoading.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
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
    toggleLoading(){
        this.setState(({loading}) => ({loading : !loading}))
    }
    render() {
        return(
            <div>
                <TableComponent />
                <Button onPress={this.toggleLoading}>상태 변경</Button>
            </div>
        );
    }
}
// 공급자가 제공하는 데이터의 자료형
HomePageComponent.childContextTypes = {
    loading : PropTypes.bool,
    setLoading : PropTypes.func
};
export default HomePageComponent;