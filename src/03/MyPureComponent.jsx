import React, {Component} from 'react';

class MyPureComponent extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('MyPureComponent 새로고침')
    }
    render() {
        return null;
    }
}

export default MyPureComponent;