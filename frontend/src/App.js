import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const FAKE_AGE = 22;

function App() {
  const [users, setUsers] = useState([]);
  const [currentUserIdx, setCurrentUserIdx] = useState(0);
  const [passedUsers, setPassedUsers] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);

  const currentUser = users[currentUserIdx] || {};

  // fetch users on first render
  useEffect(() => {
    axios.get('https://dummyapi.io/data/api/user?limit=10', {
      headers: {
        'app-id': '60349db146ff8b0837d18351',
      },
    }).then(response => {
      setUsers(response.data.data);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  const handleClickPass = () => {
    console.log('you passed ', currentUser);
    setPassedUsers(prevPassedUsers => [...prevPassedUsers, currentUser]);
    goNextUser();
  };

  const handleClickLike = () => {
    console.log('you liked ', currentUser);
    setLikedUsers(prevLikedUsers => [...prevLikedUsers, currentUser]);
    goNextUser();
  };

  const goNextUser = () => {
    setCurrentUserIdx(prevIdx => prevIdx + 1);
  };

  const renderSwipedUsers = (users) => (
    <ul>
      {users.map(user => <li key={user.id}>{user.firstName}, {user.age || FAKE_AGE}</li>)}
    </ul>
  );

  const renderUserCard = () => (
    <>
      <div className="user-card-img">
        <img src={currentUser.picture} alt={currentUser.firstName}/>
      </div>
      <div className="user-card-info">
        {currentUser.firstName}, {currentUser.age || FAKE_AGE}
      </div>
      <div className="user-card-action">
        <button onClick={handleClickPass}>x</button>
        <button onClick={handleClickLike}>&#9825;</button>
      </div>
    </>
  );

  return (
    <div className="App">
      <div className="swiped-users">
        <h3>Passed Users</h3>
        {renderSwipedUsers(passedUsers)}
      </div>
      <div className="user-card">
        {currentUserIdx >= users.length ? (
          <p className="user-card-msg">Ran out of users</p>
        ) : (
          renderUserCard()
        )}
      </div>
      <div className="swiped-users">
        <h3>Liked Users</h3>
        {renderSwipedUsers(likedUsers)}
      </div>
    </div>
  );
}

export default App;
