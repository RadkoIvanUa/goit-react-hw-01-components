import user from './user/user.json';
import data from './statistics/data.json';
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json';

import Profile from './user/user.jsx';
import Statistics from './statistics/statistics';
import FriendList from './friends/friendsList';
import TransactionsHistory from './transactions/transactionsHistory';

import { Container } from 'components/styledAppContainer';

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
