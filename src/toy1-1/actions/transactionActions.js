import Api from "../Api";

export const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';
export const SET_ERROR = 'transaction/SET_ERROR';
export const TRADE_COMPLETE = 'transaction/TRADE_COMPLETE'

export function loading() {
    return { type : LOADING_TRANSACTION_LIST };
}
export function setTransactionList(transactions) {
    return {
        type : SET_TRANSACTION_LIST,
        payload : transactions
    }
}
export function setError(errorMessage) {
    return {
        type : SET_ERROR,
        payload : {errorMessage}
    }
}
export function tradeComplete() {
    return { type : TRADE_COMPLETE };
}
export function createTransaction(data, onComplete) {
    return dispatch => {
        Api.post('/transactions', data)
            .then(({data}) => {
                dispatch(tradeComplete());
                onComplete();
            })
    }
}

export function requestTransactionList(params) {
    return dispatch => {
        dispatch(loading());
        Api.get('/transactions',{params})
            .then(({data}) => dispatch(setTransactionList(data)),
                error => {
                    console.log(error.response)
                    dispatch(setError(error.response.data.errorMessage))
                }
            );
    }
}