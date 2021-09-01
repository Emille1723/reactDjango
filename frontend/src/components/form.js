import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';




const Form = () => {
	const dispatch = useDispatch();
	const [amount, setAmount] = useState("");
	const [transaction, setTransaction] = useState("");
	// const [deposit, setDeposit] = useState(false);
	// const [withdraw, setWithdraw] = useState(false);

	// const submittedData = {
	// 	amount : '',
	// 	transactionType : '',
	// };

	const { newTransaction,  transDeposit, transWithdraw, fetchUsers} = bindActionCreators(actionCreators, dispatch);

	// isSelected is a boolean that updates once an account is checked
	const isSelect = useSelector( (state) => state.user.isSelected );

	// user state
	const user = useSelector( (state) => state.user.user );



	// const handleRadios = evt => {
	// 	ransaction = evt.target.value;
	// }

	const formSubmit = {
		amount : amount,
		transactionType : transaction
	}
	

	const handleSubmit = evt => {
		evt.preventDefault();

		// if(formSubmit.transactionType === ''){
		if(transaction === ''){
			console.log(formSubmit);
			alert('Unable to process function, ensure that the form is completed');
		}
		else{
			setAmount('');
			setTransaction('');
			evt.target.reset();
			initBank(formSubmit);
			newTransaction(formSubmit);
		}
	}

	// perform banking transaction
	const initBank = (formData) => {
		{
			formData.transactionType === "deposit" ? (
				transDeposit(formData.amount)
			):(
				transWithdraw(formData.amount)
			)
			updateUser();
		};
	}

	// update selected user
	const updateUser = () => {
		const d = new Date();
		const date = d.getDate();
		let month = parseInt(d.getMonth());
		month < 10 ? month = month + 1 : month = month;
		const year = d.getFullYear();
		const transLog = {
			id : 0,
			userID : user.id,
			transactionDate : date + '.' + month + '.' + year,
			transactionType : transaction,
			transactionAmount : amount
		}
		user.lastWorked = date + '.' + month + '.' + year;
		user.transactions.length === 1 ? transLog.id = 1 : transLog.id = parseInt(user.transactions.length) + 1;
		user.transactions.push(transLog);
		putUser();
	}

	// push updated user to db 
	const putUser = async () => {
		const put = await fetch(`http://localhost:5000/people/${user.id}`, {
			method : 'PUT',
			headers : {
				'Content-type' : 'application/json'
			},
			body : JSON.stringify(user)
		});
		fetchUsers();
	}


	return (
		<form className="form" autoComplete="off" onSubmit={handleSubmit}>
			<span className="form--title">banking transactions</span>
			{isSelect 
			?(	
				<>
					<span className="form--selected--user">
						account selected &#61;&gt; { user.firstName	} {	user.lastName }  <br/> <br/>  current balance &#61;&gt;   ${ user.amount }
					</span>
					<div className="form--input--wrapper" name="text">
						<input 
							type="text" 
							// className="form--input"
							className={`form--input`}
							value = {amount}
							onChange = { (evt) => setAmount(evt.target.value) } 
							// pattern="[0-9]{1,10000}" integers only
							pattern = "^[1-9]\d*(\.\d+)?$"
							name="text--amount"
							required
						/>
						<label className="form--input--label amount--input--label">amount to be tendered</label>
					</div>
					<div className="form--input--wrapper" name="radio">
						<input 
							type="radio" 
							className="form--input"
							name="radios"
							id="radio--deposit"
							// value = "Deposit"
							// onChange = {handleRadios}
							data-value = "deposit"
							value = {transaction}
							onChange = { evt => setTransaction(evt.target.getAttribute('data-value'))}
							// onChange = {(evt) => setDeposit(evt.target.value)}
							// onChange = {(evt) => setDeposit(evt.currentTarget.checked)}
						/>
						<label 
							htmlFor="radio--deposit" 
							className="form--input--label">deposit</label>
						<input 
							type="radio" 
							className="form--input" 
							name="radios"
							id="radio--withdraw"
							data-value = "withdraw"
							value = {transaction}
							onChange = { evt => setTransaction(evt.target.getAttribute('data-value'))}
							// value = "Withdraw"
							// onChange = {handleRadios}
							// onChange = {(evt) => setDeposit(evt.target.value)}
							// onChange = {(evt) => setWithdraw(evt.currentTarget.checked)}
						/>
						<label 
							htmlFor="radio--withdraw" 
							className="form--input--label">withdraw</label>
					</div>
					<input type="submit" className="form--submit" value="complete transaction"/>
				</>
				)
			: (
				<span className="form--selected--user">
			 		select an account to perform a transaction
				</span>
			)};
		</form>
	)
}

export default Form;
