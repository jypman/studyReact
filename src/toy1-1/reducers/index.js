import notification from "./notificationReducer";
import createReducers from "../../toy1-2/api-redux-pack/createReducers";
import searchFilter from "./searchFilterReducer";
import router from "./routerReducer";

const apiReducers = createReducers('transactions','users');

export default {
    ...apiReducers,
    notification,
    searchFilter,
    router
};