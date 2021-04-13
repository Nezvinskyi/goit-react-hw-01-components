import React from 'react';
import user from './user.json';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import FriendList from './components/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory';

const App = () => (
  <div>
    <h1>HW-01-Components</h1>
    <h2>Task 1: Profile in social network</h2>
    <Profile
      name={user.name}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <h2>Task 2: Statistics section</h2>
    <Statistics title="Upload stats" stats={statisticalData} />

    <h2>Task 3: Friends list</h2>
    <FriendList friends={friends} />

    <h2>Taks 4: Transaction history</h2>
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
