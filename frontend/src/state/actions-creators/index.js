export const fetchTransactions = (transactions) => {
	return (dispatch) => {
		dispatch({
			type: "FETCHED_TRANSACTIONS_LOG",
			payload : transactions
		});
	}
};


export const fetchColours = (colours) => {
	return (dispatch) => {
		dispatch({
			type : "FETCH_COLOURS",
			payload : colours
		});
	}
};




// loadUsers from api call action creator
export const loadUsers = (users) => {
	return (dispatch) => {
		dispatch({
			type: "FETCHED_USERS",
			payload : users
		});
	}
}

// function to make api call to retreive data to be passed to loadUsers action Creator
export const fetchUsers = () => async(dispatch) => {
	const url = 'http://localhost:5000/people';
	try{
		const users = await fetch(url).then(res => res.json());
		dispatch(loadUsers(users));
		return users;
	}
	catch(error){
		console.log(error);
	}
};


export const selectUser = (user) => {
	return (dispatch) => {
		dispatch({
			type : "SELECTED_USER",
			payload : user
		});
	}
}


// function to make api call to retreived user whose account will be actioned
// export const selectedUser = (id) => async(dispatch) => {
// 	const url = `http://localhost:5000/people/${id}`;
// 	try{
// 		const user = await fetch(url).then(res => res.json());
// 		dispatch(selectUser(user));
// 	}	
// 	catch(error){
// 		console.log(error);
// 	}
// }


export const userPostOp = (	log ) => {
	return (dispatch) => {
		dispatch({
			type: "UPDATE_USER",
			payload : log
		});
	}
}
// action creator for new transaction
export const newTransaction = ( formData ) => {
	return (dispatch) => {
		dispatch({
			type: "NEW_TRANSACTION",
			payload : formData
		});
	}
}
export const transDeposit = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "TRANSACTION_DEPOSIT",
			payload : amount
		});
	}
}
export const transWithdraw = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "TRANSACTION_WITHDRAW",
			payload : amount
		});
	}
}
export const depositMoney = ( amount ) => {
	return (dispatch) => {
		dispatch({
			type : "deposit",
			payload : amount
		});
	}
}
export const withdrawMoney = ( amount ) => {
	return (dispatch) => {
		dispatch({
			type : "withdraw",
			payload : amount
		});
	}
}