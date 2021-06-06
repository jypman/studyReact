import React, {Component} from 'react';

class CounterExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        this.increaseCount = this.increaseCount.bind(this);
    }
    // increaseCount(){
    //     const { count }  = this.state
    //     this.setState({
    //         count : count + 1
    //     })
    // }
    increaseCount(){
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }
    render() {
        return (
            <div>
                <span> 카운트 : {this.state.count}</span>
                <button onClick={this.increaseCount}>카운트 1씩 증가</button>
            </div>
        );
    }
}

export default CounterExample;