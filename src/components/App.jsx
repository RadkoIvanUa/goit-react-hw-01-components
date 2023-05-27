import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friends-list/friends.json';
import transactions from './transactions/transactions.json';

import Profile from './profile/profileee.jsx';
import Statistics from './statistics/statisticsss';
import FriendList from './friends-list/friendsListtt';
import TransactionsHistory from './transactions/transactionsHistoryyy';

import { Container } from 'components/styledAppContainerrr';

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
