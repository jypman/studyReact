// 화면 컴포넌트
import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class SearchResultTable extends PureComponent{
    render() {
        const {items} = this.props;
        return(
            <table border="1" width="100%">
                <tbody>
                <tr>
                    <td>아이디</td>
                    <td>이름</td>
                    <td>나이</td>
                </tr>
                {items.map(({id, name, age}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}
SearchResultTable.propTypes = {
    // PropTypes.arrayOf()은 해당 배열의 요소의 특정 타입을 설정할 때 파라미터에 전달하여 사용한다.
    items : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number,
            name : PropTypes.string,
            age : PropTypes.number
        })
    )
}
SearchResultTable.defaultProps = {
    items : []
}
export default SearchResultTable;