import { addLog } from "../actions-creators";

const initialState = {
	transactions : []
};


const reducer = ( state = initialState, action ) => {
	// destructured action object
	const { type, payload } = action;
	switch(type){
		case "FETCHED_TRANSACTIONS_LOG":
			return {...state, transactions : payload};
		case "ADD_LOG":
			return {...state, payload};
		default:
			return state;
	}
};


export default reducer;