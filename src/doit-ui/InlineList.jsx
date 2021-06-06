// React최상위 함수들은 엘리먼트를 조작하는 API이다.
// React.Children은 this.props.children을 다루는 함수이다.
// 그 증 React.Children.map(children,function())에서
// children에 들어오는 인자는 자식 프로퍼티에 포함된 jsx의 컴포넌트 엘리먼트들을 배열로 취급한다.

// withStylesPropTypes은 ??

import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {withStyles, css, withStylesPropTypes} from "./withStyles";
import {unit} from './Theme';

class InlineList extends PureComponent{
    render() {
        const {align, children, styles, spacingBetween, verticalAlign} = this.props;
        return(
            <div
                //css()인자에 css객체가 들어오는데 이것은 style=""의 효과와 같다.
                {...css(
                    styles.wrapper,
                    align === 'center' && styles.alignCenter,
                    align === 'right' && styles.alignRight,
                    verticalAlign === 'top' && styles.verticalAlignTop,
                    verticalAlign === 'bottom' && styles.verticalAlignBottom
                )}
            >
                {React.Children.map(children, child => (
                    // 여기서 css객체의 key는 자바스크립트의 element.style.key에서 key와 같은 방식으로 적는다.
                    <div {...css({marginRight : spacingBetween * unit})}>{child}</div>
                ))}
            </div>
        );
    }
}
InlineList.propTypes = {
    ...withStylesPropTypes,
    align : PropTypes.oneOf(['left','center','right']),
    verticalAlign : PropTypes.oneOf(['top','middle','bottom']),
    spacingBetween : PropTypes.number,
    children : PropTypes.node
}

InlineList.defaultProps = {
    spacingBetween : 1
};

export default withStyles( () => ({
    wrapper : {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    alignCenter : {
        justifyContent: 'center'
    },
    alignRight : {
        justifyContent : 'flex-end'
    },
    verticalAlignTop : {
        alignItems : 'flex-start'
    },
    verticalAlignBottom : {
        alignItems : 'flex-end'
    }
}))(InlineList);