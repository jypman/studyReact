import React, {Component} from 'react';

class NewCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.increaseCount = this.increaseCount.bind(this);
    }
    // App.jsx의 <button></button>의 프로퍼티가 변경될 때도 이 함수는 호출된다.
    // 즉 다른 프로퍼티가 변경되어도 호출된다는 것이다.
    // 인자 값 중 props는 상위 컴포넌트에서 전달된 것이다.
    // state는 상위 컴포넌트의 state가 아닌 해당 컴포넌트의 this.state를 의미한다.
    // 이 함수는 반환 값으로 state를 변경한다.
    static getDerivedStateFromProps(props, state){
        const { count } = props;
        return {
            count,
            newCount : state.count === count
                ? state.newCount
                : count
        };
    }
    increaseCount(){
        this.setState(({ newCount }) => ({
            newCount : newCount + 1
        }));
    }
    render() {
        return (
            <div>
                현재카운트 : {this.state.newCount}
                <button onClick={this.increaseCount}>
                    카운트 증가
                </button>
            </div>
        );
    }
}

export default NewCounter;