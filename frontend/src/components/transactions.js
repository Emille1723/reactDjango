import React from 'react';
import { useSelector, useDispatch } from 'react-redux';




const Transactions = () => {


	const colours = useSelector( (state) => state.colours.colours );
	const T = useSelector( (state) => state.transactions.transactions);


	return (
		<div className="transactions">
			<span className="transactions--title">transaction history</span>
			<div class="transactions--wrapper--wrapper">
				<div className="transactions--wrapper">
					{T.length == 0 
						? (<span className="transactions--wrapper--message">select an account to view an account's transaction history</span>)
						: (
							T.map((t,i) => (
								<div key={t.id} className="transactions--item">
									<i style={{backgroundColor:colours[i].colour}}></i>
									<span className="transactions--item--text" name="date">{t.transactionDate}</span>
									<span className="transactions--item--text" name="type">type &#61;&gt;  {t.transactionType}</span>
									<span className="transactions--item--text" name="amount">amount &#61;&gt;  {t.transactionAmount}</span>
								</div>
							)).reverse()
					)}
				</div>
			</div>
		</div>
	)
}

export default Transactions;
