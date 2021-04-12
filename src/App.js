import React from 'react';
// import ReactDOM from 'react-dom';
import user from './user.json';
import friends from './friends.json';
import statisticalData from './statistical-data.json';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory';

const App = () => (
  <div>
    <Profile
      name={user.name}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </div>
);

export default App;
