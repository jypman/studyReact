// import collection from './02CollectionReducer';
import collection from './collectionReducer';
import loading from './loadingReducer';
import user from './userReducer';
import searchFilter from './searchFilterReducer';

// 모든 리듀서들을 하나로 합치는 작업을 여기서 한다.
export default {
    collection,
    loading,
    user,
    searchFilter
};
