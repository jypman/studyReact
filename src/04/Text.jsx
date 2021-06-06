import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withStyles, {css} from './withStyles'

class Text extends PureComponent {
    render() {
        const {
            children,
            // withStyles에 정의된 스타일이 전달된다.
            styles,
            large,
            xlarge,
            small,
            xsmall,
            primary,
            secondary
        } = this.props;
        return (
            <span

                {...css(
                    // css()함수로 엘리먼트에 default키에 적용된 스타일들이 적용된다.
                    // css()함수는 엘리먼트 속성값을 객체형으로 반환한다.
                    // 그래서 전개연산자를 사용해서 해당 엘리먼트의 스타일 적용 가능
                    styles.default,
                    xsmall && styles.xsmall,
                    small && styles.small,
                    large && styles.large,
                    xlarge && styles.xlarge,
                    secondary && styles.secondary,
                    primary && styles.primary
                )}
            >
                {children}
            </span>
        );
    }
}

Text.propTypes = {
    children : PropTypes.node.isRequired,
    xsmall : PropTypes.bool,
    small : PropTypes.bool,
    large : PropTypes.bool,
    xlarge : PropTypes.bool,
    secondary : PropTypes.bool,
    primary : PropTypes.bool
}

export default withStyles(({color,size}) => ({
    default : {
        color : color.default,
        fontSize : size.md
    },
    xlarge : {
        fontSize : size.xg
    },
    large : {
        fontSize : size.lg
    },
    small : {
        fontSize : size.sm
    },
    xsmall : {
        fontSize : size.xs
    },
    primary : {
        color : color.primary
    },
    secondary : {
        color : color.secondary
    }
}))(Text);