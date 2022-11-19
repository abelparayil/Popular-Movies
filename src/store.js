import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './redux/rootReducers';

const composeEnhancers = compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;