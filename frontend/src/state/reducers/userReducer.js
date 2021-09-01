const initialState = {
	isSelected : false,
	user : {}
};


const reducer = (state = initialState, action) => {
	// destructured action object
	const {type, payload} = action;
	switch(type){
		case "SELECTED_USER":
			return {...state, isSelected : true, user : payload};
		case "TRANSACTION_DEPOSIT":
			state.user.amount = parseFloat(state.user.amount) + parseFloat(payload);
			return {...state, isSelected : true};
		case "TRANSACTION_WITHDRAW":
			state.user.amount = parseFloat(state.user.amount) - parseFloat(payload);
			return {...state, isSelected : true};
		case "UPDATE_USER":
			return state;
		default:
			return state;
	}

}


export default reducer;