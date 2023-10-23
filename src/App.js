import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import user from './assets/user.json'
import data from './assets/data.json'
import friends from './assets/friends.json'
import transactions from './assets/transactions.json'


export function App() {

    return (
        <div className="App">
            <Profile user={user} />
            <Statistics data={data} />
            <FriendList friends={friends} />
            <TransactionHistory transactions={transactions} />
        </div>
    )
} 