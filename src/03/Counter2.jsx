import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter2 extends Component {
    render() {
        return (
            <React.Fragment>
                <div>현재 카운트 : {this.props.count}</div>
                <button
                    onClick = {() => this.props.onAdd()}
                >
                    카운트 증가
                </button>
            </React.Fragment>
        );
    }
}

Counter2.propTypes = {
    count : PropTypes.number,
    onAdd : PropTypes.func
}

export default Counter2;