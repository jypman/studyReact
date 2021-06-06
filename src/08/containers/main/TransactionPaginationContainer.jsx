import {connect} from "react-redux";
import TransactionPagination from "../../components/main/TransactionPagination";
import {requestTransactionList} from "../../actions/transactionPackActions";
import {
    paginationSelector,
    transactionListLoadingStateSelector
} from "../../selectors/transactionSelectors";

const mapStateToProps = state => {
    const {pagination, ids} = state.transactions;
    const {size} = pagination;
    return {
        searchParams: state.searchFilter.params,
        hasNext: ids.length === size,
        pageNumber : paginationSelector(state).number  || 1,
        loading : transactionListLoadingStateSelector(state)};
};
const mapDispatchToProps = {
    requestTransactionList
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);