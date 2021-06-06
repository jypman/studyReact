// 데이터 컴포넌트
import {connect} from "react-redux";
import PresentationComponent from "../PresentationComponent";

// 부모 컴포넌트에서 this.store와 부모컴포넌트에서 전달하는 props를 받는다.
// 여기서 props.id는 2다.
const mapStateToProps = (state, props) => {
    return {
        userName : state.user.name,
        entity : state.collection.entities[props.id]
    };
};

// mapStateToProps가 반환하는 객체를 PresentationComponent라는 컴포넌트에 props로 전달한다.
export default connect(mapStateToProps)(PresentationComponent);