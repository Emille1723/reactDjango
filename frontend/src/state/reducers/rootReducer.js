import { useReducer } from 'react';
import { combineReducers } from 'redux';
import coloursReducer from './coloursReducer';
import formReducer from './formReducer';
// import bankReducer from './bankReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import transactionsReducer from './transactionsReducer';

// this file is used to call of the reducers so that they're referenced from one file

const rootReducer = combineReducers({
	colours : coloursReducer,
	form : formReducer,
	// bank: bankReducer,
	user : userReducer,
	users : usersReducer,
	transactions : transactionsReducer
});

export default rootReducer;