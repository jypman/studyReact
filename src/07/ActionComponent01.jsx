// 화면 컴포넌트
import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Button from "../04/Button";

class ActionComponent01 extends PureComponent{
    render() {
        const {setAge} = this.props;
        return(
            <React.Fragment>
                <Button onPress={() => setAge(2,19)}>고유번호 2번의 나이를 19세로 변경</Button>
            </React.Fragment>
        );
    }
}

ActionComponent01.propTypes = {
    setAge : PropTypes.func
}

export default ActionComponent01;