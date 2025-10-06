
import './App.css';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/friends/FriendList';
import stat from './data/statistics.json'
import friends from './data/friends.json'

function App() {
  return (
    <div className="App">
      <Statistics stats={stat} title='Upload stats'/>
      <FriendList friends={friends}/>
    </div>
  );
}

export default App;
