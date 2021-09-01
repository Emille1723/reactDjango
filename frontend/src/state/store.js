import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/rootReducer';

//needed for aysnc requests
import thunk from 'redux-thunk';


// instaniating the store
// by default the store will only contain a reference to the reducers and an empty object

export const store = createStore(
	reducers, 
	{},
	applyMiddleware(thunk)
)