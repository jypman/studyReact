import {connect} from 'react-redux';
import SearchResultTable from "../SearchResultTable";

const mapStateProps = state => {
    const {collection, searchFilter} = state;
    const hasFilter =
        //Boolean()은 파라미터 안에 결과 값이 undefined,NaN,null,false,0,-0이 들어가면 false를 반환하고 그 외는 true를 반환한다.
        Object.values(searchFilter).reduce((result, value) => result || Boolean(value), false);
    const {ids, entities} = collection;
    const items = ids
        .map(id => entities[id])
        .filter(
            entity =>
                !hasFilter ||
                // Object.entries()는 파라미터 객체에서 각 key와 그 key의 value를 요소로 하는 배열을 요소로 갖는 새로운 배열을 반환한다.
                // 예 : const obj = { a : 1, b : 2}
                // 예 : Object.entries(obj)는 [[a,1],[b,2]]을 반환한다.
                Object.entries(searchFilter).reduce(
                    (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`), true)
        );
    return {items};
};

export default connect(mapStateProps)(SearchResultTable)