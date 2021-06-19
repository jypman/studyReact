// <Route path="*" component={NotFound} />
// 위의 코드는 아래와 같다.
// <Route path="*" render={ ({match}) => <NotFound match={match}/> } />

import React, {PureComponent} from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Applayout from './components/Applayout';
import MainPage from "./components/main/MainPage";
import NotFound from "./components/NotFound";

import configureStore from "./store/configureStore";
import ModalProvider from "./ModalProvider";
import NotificationContainer from "./containers/NotificationContainer";
import RouterStateContainer from "./containers/RouterStateContainer";

class CoinApp extends PureComponent {
    store = configureStore()
    render() {
        return (
            <Provider store={this.store}>
                <Router>
                    <RouterStateContainer />
                    <ModalProvider>
                        <Applayout>
                            <Switch>
                                <Route path="/" exact render={() => <MainPage />} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                            <NotificationContainer />
                        </Applayout>
                    </ModalProvider>
                </Router>
            </Provider>
        );
    }
}

export default CoinApp;