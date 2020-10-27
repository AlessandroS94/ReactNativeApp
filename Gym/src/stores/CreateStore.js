import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,

};

export default (reducers) => {

    const middleware = [thunk, promise];
    const enhancers = [applyMiddleware(...middleware)];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const persistentReducer = persistReducer(persistConfig, reducers);

    const store = createStore(persistentReducer, composeEnhancers(...enhancers));

    const persistor = persistStore(store);

    return {store, persistor};
}

