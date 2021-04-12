import React from 'react';
// import ReactDOM from 'react-dom';
import user from './user.json';
import statisticalData from './statistical-data.json';
import Profile from './components/Profile';
import Statistics from './components/Statistics';

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
  </div>
);

export default App;
