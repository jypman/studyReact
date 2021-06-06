import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from "./FormContext";

class FormProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values : {},
            errors : {}
        }
        this.reset = this.reset.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    onChange(name, updatedValue){
        this.setState(({values}) => ({
            values : {
                ...values,
                [name] : updatedValue
            }
        // state가 변경된 다음 변경된 state의 값으로 유효성 검사의 역할을 하는 콜백함수가 실행된다.
        }), () => this.validate(this.state.values))
    }
    reset(){
        this.setState({
            values : {},
            errors : {}
        })
    }
    submit(){
        this.props.onSubmit(this.state.values)
    }
    // input에 입력된 값에 대해 유효성검사를 하는 콜백함수
    validate(values){
        const {validate} = this.props;
        if(!validate) return;
        // validate가 false일 경우 아래의 코드가 실행되지 않는다.
        const errors = validate(values);
        this.setState(({
            // 유효성 검증의 에러 메세지가 컨텍스트의 error에 저장된다.
            // 예시 코드 보고 싶당
            errors
        }));
    }
    render() {
        const {values, errors} = this.state;
        return (
            <Provider
                value={{
                    errors,
                    values,
                    onChange : this.onChange,
                    reset : this.reset,
                    submit : this.submit
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

FormProvider.propTypes = {
    validate : PropTypes.func
};

export default FormProvider;