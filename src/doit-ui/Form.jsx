import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const {Provider, Consumer} = React.createContext({});

class FormProvider extends PureComponent {
    static Consumer = Consumer;
    static getDerivedStateFromProps({initValues}, prevState){
        const values = initValues !== prevState.initValues
            ? initValues : prevState.values;
        return {
            initValues,
            values,
            errors : {}
        };
    }
    constructor(props) {
        super(props);
        this.state = {};
        this.reset = this.reset.bind(this);
        this.validate = this.validate.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        const{ values, errors } = this.state;
        e.preventDefault();
        if(Object.values(errors).length === 0){
            this.props.onSubmit(values);
        }
    }
    onChange(name, updatedValue){
        this.setState(
            ({values}) => ({
                values : {
                    ...values,
                    [name] : updatedValue
                }
            }),
            // state가 변경된 다음 변경된 state의 값으로 유효성 검사의 역할을 하는 콜백함수가 실행된다.
            () => this.validate(this.state.values)
        );
    }
    reset(){
        this.setState({values : {}});
    }
    validate(values){
        const {validate} = this.props;
        if(!validate){
            return;
        }
        const errors = this.props.validate(values);
        this.setState({
            errors
        });
    }
    render() {
        const {values, errors} = this.state;
        return (
            <Provider
                value={
                    {
                        errors,
                        values,
                        onChange : this.onChange,
                        reset : this.reset
                    }
                }
            >
                <form onSubmit={this.handleSubmit}>
                    {this.props.children}
                </form>
            </Provider>
        );
    }
}

FormProvider.propTypes = {
    validate : PropTypes.func
};

FormProvider.defaultProps = {
    initValues :{},
    validate : () => ({})
}

export default FormProvider;