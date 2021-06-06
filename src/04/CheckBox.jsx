import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withStyles, {css} from './withStyles'

class CheckBox extends PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        if (this.props.autoFocus) this.ref.focus()
    }
    handleChange (e) {
        const {name, onChange} = this.props;
        onChange(name, e.target.checked);
    }
    setRef(ref){
        this.ref = ref;
    }
    render() {
        const {
            errorMessage,
            label,
            children,
            styles,
            checked,
        } = this.props;
        return (
            <label>
                {label}
                <div>
                    <input
                        ref={this.setRef}
                        type="checkbox"
                        checked={checked && 'checked'}
                        onChange={this.handleChange}
                    />
                    {children}
                </div>
                {errorMessage && (
                    <div>
                        <span {...css(styles.errorText)}>
                            {errorMessage}
                        </span>
                    </div>
                )}
            </label>
        );
    }
}

CheckBox.propTypes = {
    name : PropTypes.string.isRequired,
    autoFocus : PropTypes.bool,
    checked : PropTypes.bool,
    onChange : PropTypes.func
};

CheckBox.defaultProps = {
    autoFocus : false,
    checked : false,
    onChange : () => {}
}

export default withStyles(({color, size}) => ({
    errorText : {
        fontSize : size.sm,
        color : color.error
    }
}))(CheckBox);