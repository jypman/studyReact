import React, {Component} from 'react';

class MyComponent extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('MyComponent 새로고침')
    }
    render() {
        return null;
    }
}

export default MyComponent;