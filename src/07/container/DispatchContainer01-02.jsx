// 데이터 컴포넌트
import {connect} from 'react-redux';
import ActionComponent01 from "../ActionComponent01";
import {setAge} from "../actions/collectionActions";

// const mapDispatchToProps = dispatch => {
    // return{
    //     setAge : (id, age) => dispatch(setAge(id,age))
    // };
// };

// 위처럼 인자로 받는 dispatch 함수는 id, age를 setAge()함수에 그대로 전달한다.
// 이런 경우에는 dispatch를 생략하여 아래와 같이 간략하게 나타낼 수 있다.
const mapDispatchToProps = {
    // setAge : setAge
    // 키와 값이 서로 같으면 객체 확장 표현식으로 위의 명령어를 아래와 같이 간략하게 표현할 수 있다.
    setAge
};

export default connect(null, mapDispatchToProps)(ActionComponent01);