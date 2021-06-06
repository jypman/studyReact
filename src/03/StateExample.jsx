import React, {Component} from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props);
        // state를 정의
        this.state = {
            loading : true,
            formData : 'no data'
        };
        // 콜백함수 정의
        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 4000)
    }
    // 함수를 만들 때 함수명 앞에 function은 생략해야 한다.
    handleData(){
        const data = 'new data';
        const { formData } = this.state;
        // state 변경
        this.setState({
            loading : false,
            formData : data + formData
        })
        console.log('loading값 :', this.state.loading)
    }
    render() {
        return (
            <React.Fragment>
                <span>로딩중 : {String(this.state.loading)}</span>
                <span>결과 : {this.state.formData}</span>
            </React.Fragment>
        );
    }
}

export default StateExample;