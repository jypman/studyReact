import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {css, withStyles, withStylesPropTypes} from "./withStyles";
import Spacing, {propTypes as spacingPropTypes} from "./Spacing";

class Card extends PureComponent{
    render() {
        const {children, styles, ...spacingPropTypes} = this.props;
        return(
            <div {...css(styles.wrapper)}>
                <Spacing {...spacingPropTypes}>
                    {children}
                </Spacing>
            </div>
        );
    }
}
Card.propTypes = {
    children : PropTypes.node,
    ...spacingPropTypes,
    ...withStylesPropTypes
};
export default withStyles(({depth, unit, color}) => ({
    wrapper : {
        ...depth.level1,
        borderRadius : unit,
        backgroundColor : color.white,
        display : 'flex',
        overflow : 'hidden',
        marginBottom : unit * 4
    }
}))(Card);