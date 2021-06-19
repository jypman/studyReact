// React최상위 함수들은 엘리먼트를 조작하는 API이다.
// React.Children은 this.props.children을 다루는 함수이다.
// 그 증 React.Children.map(children,function())에서
// children에 들어오는 인자는 자식 프로퍼티에 포함된 jsx의 컴포넌트 엘리먼트들을 배열로 취급한다.

// React.cloneElement는 새로운 엘리먼트를 복사하여 반환한다.
// 각각의 원본 자식 컴포넌트들이 오는 child와 함께 새로운 엘리먼트를 추가하여 원본 자식 컴포넌트들과 함께 반환한다는 것이다.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHead extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <thead>
            {React.Children.map(children, child =>
                React.cloneElement(child, { isHeader: true })
            )}
            </thead>
        );
    }
}

TableHead.propTypes = {
    children: PropTypes.node
};

export default TableHead;