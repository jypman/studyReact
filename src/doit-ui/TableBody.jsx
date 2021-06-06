//React.Children.toArray()은 자식 컴포넌트를 다루고 싶을 때 사용하며
// this.props.children을 전달할 때 다시 정렬하거나 일부만 배열로 전달하고 싶을 때 사용한다.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableBody extends PureComponent {
    render() {
        const { children } = this.props;
        const { length } = React.Children.toArray(children);

        return (
            <tbody>
            {React.Children.map(children, (child, index) => {
                const baseline = index < length - 1 ? true : false;
                return React.cloneElement(child, { baseline });
            })}
            </tbody>
        );
    }
}

TableBody.propTypes = {
    children: PropTypes.node,
};

export default TableBody;