import createSelectors from "../../toy1-2/api-redux-pack/createSelectors";
export const {
    resourceSelector : transactionsSelector,
    collectionSelector : transactionListSelector,
    collectionLoadingStateSelector : transactionListLoadingStateSelector,
    createLoadingSateSelector : transactionCreateLoadingStateSelector,
    paginationSelector
} = createSelectors('transactions')