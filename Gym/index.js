/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import createStore from './src/stores';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {PersistGate} from 'redux-persist/integration/react';
import {LoadingPage} from './src/pages/LoadingPage';
const {store, persistor} = createStore();

const Root = function() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}loading={<LoadingPage />} >
                <App/>
            </PersistGate>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => Root);
