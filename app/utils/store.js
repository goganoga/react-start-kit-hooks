import Reducer, { initialState } from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action);
        const returnValue = next(action);
        console.log('state after dispatch', getState());
        return returnValue
    }
}*/


const store = createStore(Reducer, initialState, composeWithDevTools(
    //applyMiddleware(logger)
    applyMiddleware()
));

export default store;