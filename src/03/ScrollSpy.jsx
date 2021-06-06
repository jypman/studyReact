import React, {Component} from 'react';

class ScrollSpy extends Component {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
    }
    // 이 ref는 document.getElementById()가 반환하는 객체를 반환한다.
    // 그렇기 때문에 인자값인 ref는 이 파일에서는 <div />라는 DOM객체를 반환한다.
    setRef(ref){
        // DOM 객체를 컴포넌트 변수인 this.ref에 할당해야지만 DOM객체 함수를 사용할 수 있다.
        this.ref = ref
    }
    checkPosition(){
        if(this.ref.getBoundingClientRect().top < window.innerHeight)
            console.log('enter')
        else
            console.log('exit')
    }
    componentDidMount() {
        window.addEventListener('scroll',this.checkPosition)
        // 렌더링 된 후 1번만 발동
        this.checkPosition()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.checkPosition)
    }
    render() {
        return (
            <React.Fragment>
                <div ref={this.setRef} />
            </React.Fragment>
        );
    }
}

export default ScrollSpy;