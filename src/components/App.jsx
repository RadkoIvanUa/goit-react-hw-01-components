import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friends-list/friends.json';
import transactions from './transactions/transactions.json';

import Profile from './profile/Profile.jsx';
import Statistics from './statistics/Statistics';
import FriendList from './friends-list/FriendsList';
import TransactionsHistory from './transactions/TransactionsHistory';

import { Container } from 'components/StyledAppContainer';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload Stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </Container>
  );
};
