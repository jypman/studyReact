import React, {Component} from 'react';

class LifecycleExample extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('static getDerivedStateFromProps 호출')
        return{};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('constructor 호출')
    }
    componentDidMount() {
        console.log('componentDidMount 호출')
        this.setState({
            updated : true
        })
        // this.forceUpdate()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate 호출')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount 호출')
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate 호출')
        return {};
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate 호출')
        return true;
        // return false;
    }
    render() {
        console.log('render 호출')
        return(
            <div>
                무~야호!
            </div>
        )
    }
}

export default LifecycleExample;