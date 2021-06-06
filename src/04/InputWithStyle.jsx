// ref라는 프로퍼티는 render()함수에서 생성된 DOM 노드나 React엘리먼트에 접근하는 방법을 제공한다.

// htmlFor라는 프로퍼티는 <input>과 <textarea> 같은 HTML 폼 컨트롤을 구분할 수 있는 라벨 역할을 한다.
// 스크린 리더를 사용할 수 있는 사용자를 위해 자세한 설명이 담긴 라벨을 제공해야 한다.
// for 프로퍼티를 리액트에서는 htmlFor로 사용하는 것에 주의하자!

import React, {Component} from 'react';
import PropTypes from 'prop-types'

class InputWithStyle extends Component {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const { name, onChange } = this.props
        if(onChange) onChange(name, e.target.value);
    }
    componentDidMount() {
        if(this.props.autoFocus) this.ref.focus();
    }
    componentDidUpdate() {
        if(this.props.autoFocus) this.ref.focus();
    }
    setRef(ref){
        this.ref = ref;
    }
    render() {
        const { errorMessage, label, value, name, type } = this.props;
        return (
            <div className="input-field">
                <input
                    id={`input_${name}`}
                    className={`validate ${errorMessage && 'invalid'}`}
                    ref={this.setRef}
                    type={type}
                    onChange={this.handleChange}
                    value={value || ''}
                />
                <label className="active" htmlFor={`input_${name}`}>
                    {label}
                </label>
                {errorMessage && <span className="helper-text" data-error={errorMessage}>{errorMessage}</span>}
            </div>
        );
    }
}

InputWithStyle.propTypes = {
    type : PropTypes.oneOf(['text','number','price']),
    name : PropTypes.string.isRequired,
    value : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage : PropTypes.string,
    label : PropTypes.string,
    onChange : PropTypes.func,
    onFocus : PropTypes.func,
    autoFocus : PropTypes.bool
};

InputWithStyle.defaultProps = {
    onChange : () => {},
    onFocus : () => {},
    autoFocus : false,
    type : 'text',
};

export default InputWithStyle;