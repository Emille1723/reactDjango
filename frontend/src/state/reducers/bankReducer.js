
const initialState = {
	account: 999,
	amount : 0,
	transactionType : ''
};	

const reducer = ( state = initialState , action ) => {
	//destructured action object
	const { type, payload } = action;
	switch (type){
		case "TRANSACTION_DEPOSIT":
			return state, {
				amount : state.amount - payload.amount,
			};
		case "TRANSACTION_WITHDRAW":
			return state;
		default:
			return state;
	}
}

export default reducer;