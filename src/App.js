import React from 'react';
import user from './user.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Layout from './components/Layout/Layout';

const App = () => (
  <Layout>
    <h2>Task 1: Profile in social network</h2>
    <Profile
      name={user.name}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <br />
    <h2>Task 2: Statistics section</h2>
    <Statistics title="Upload stats" stats={statisticalData} />
    <br />
    <h2>Task 3: Friends list</h2>
    <FriendList friends={friends} />
    <br />
    <h2>Task 4: Transaction history</h2>
    <TransactionHistory items={transactions} />
  </Layout>
);

export default App;
