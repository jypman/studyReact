import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles, css, withStylesPropTypes} from "../../toyUI/withStyles";
import AppNav, {HEIGHT} from "./AppNav";

class Applayout extends PureComponent {
    render() {
        const {children, styles} = this.props;
        return (
            <div {...css(styles.wrapper)}>
                <AppNav />
                <div {...css(styles.body)}>
                    {children}
                </div>
            </div>
        );
    }
}

Applayout.propTypes = {
    ...withStylesPropTypes,
    children : PropTypes.node
};

export default withStyles(({unit}) => ({
    wrapper : {
        marginTop : HEIGHT
    },
    body : {
        padding : unit * 4
    }
}))(Applayout);