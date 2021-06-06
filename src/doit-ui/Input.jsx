// ref라는 프로퍼티는 render()함수에서 생성된 DOM 노드나 React엘리먼트에 접근할 수 있다.
// ref라는 프로퍼티는 dom객체를 반환한다.

// htmlFor라는 프로퍼티는 <input>과 <textarea> 같은 HTML 폼 컨트롤을 구분할 수 있는 라벨 역할을 한다.
// 스크린 리더를 사용할 수 있는 사용자를 위해 자세한 설명이 담긴 라벨을 제공해야 한다.
// for 프로퍼티를 리액트에서는 htmlFor로 사용하는 것에 주의하자!

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles, css, withStylesPropTypes} from "./withStyles";

class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const {name, onChange} = this.props;
        if(onChange){
            onChange(name, e.target.value)
        }
    }
    componentDidMount() {
        if(this.props.autoFocus){
            this.ref.focus();
        }
    }
    setRef(ref){
        this.ref = ref;
    }
    render() {
        const {
            errorMessage,
            label,
            value,
            name,
            type,
            styles,
            large,
            xlarge,
            small,
            xsmall,
        } = this.props;
        return (
            <fieldset {...css(styles.wrapper)}>
                <label
                    htmlFor={`input_${name}`}
                    {...css(
                        styles.label,
                        errorMessage && styles.errorLabel
                    )}
                >
                    {errorMessage || label}
                </label>
                <input
                    {...css(
                        styles.input,
                        errorMessage && styles.error,
                        xsmall && styles.xsmall,
                        small && styles.small,
                        large && styles.large,
                        xlarge && styles.xlarge
                    )}
                    id={`input_${name}`}
                    ref={this.setRef}
                    type={type}
                    onChange={this.handleChange}
                    value={value || ""}
                />
            </fieldset>
        );
    }
}

Input.propTypes = {
    ...withStylesPropTypes,
    type : PropTypes.oneOf(['text', 'number', 'price']),
    name : PropTypes.string.isRequired,
    value : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage : PropTypes.string,
    label : PropTypes.string,
    onChange : PropTypes.func,
    autoFocus : PropTypes.bool
};

Input.defaultProps = {
    onChange : () => {},
    autoFocus : false
}

export default withStyles(({depth, unit, color, size, lineHeight}) => ({
    wrapper : {
        border : 0,
        padding : 0,
        position : 'relative',
    },
    label : {
        display : 'block',
        fontSize : size.xs,
        top : 2,
        left : unit * 2,
        cursor : 'pointer'
    },
    input : {
        marginTop : 2,
        fontSize : size.md,
        lineHeight : lineHeight.md,
        padding : unit * 1.5,
        border : 1,
        borderColor : color.primary,
        borderStyle : 'solid',
        borderRadius : 4,
        outline : {
            ':focus' : {
                boxShadow : '0 0 0 2px rgba(0, 0, 0, .3)'
            }
        }
    },
    xlarge : {
        fontSize : size.xg
    },
    large : {
        fontSize : size.sm,
        padding : unit
    },
    small : {
        fontSize : size.sm,
        padding : unit
    },
    errorLabel : {
        color : color.error
    },
    error : {
        borderColor : color.error
    }
}))(Input);