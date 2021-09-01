import Form from './form';
import UsersList from './usersList';
import Transactions from './transactions';

const AppWrapper = () =>{
    return(
        <div className="app--wrapper">
			<UsersList />
            <Form />
			<Transactions />
        </div>
    )
}


export default AppWrapper;