import './App.css';
import {useEffect, useState} from 'react';
import api from './constants/api';
import {calculateAge} from './utils/common';
import http from './utils/http';

// TODO: use some UI lib (material, bootstrap...) and add animations/effects to beautify UI UX
function App() {
  const [users, setUsers] = useState([]);
  const [currentUserIdx, setCurrentUserIdx] = useState(0);
  const [passedUsers, setPassedUsers] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);

  const currentUser = users[currentUserIdx] || {};

  // fetch users on init
  useEffect(() => {
    fetchUsersForSwipe();
  }, []);

  useEffect(() => {
    fetchLikedUsers();
  }, []);

  useEffect(() => {
    fetchPassedUsers();
  }, []);
  // end fetch users on init

  const fetchUsersForSwipe = () => {
    http.get(api.getUsers()).then(response => {
      setUsers(response.data);
      setCurrentUserIdx(0);
    }).catch(err => {
      console.error(err);
    });
  };

  const fetchLikedUsers = () => {
    http.get(api.getSwipes(true)).then(response => {
      setLikedUsers(response.data);
    }).catch(err => {
      console.error(err);
    });
  };

  const fetchPassedUsers = () => {
    http.get(api.getSwipes(false)).then(response => {
      setPassedUsers(response.data);
    }).catch(err => {
      console.error(err);
    });
  };

  const handleSwipe = (isLike) => {
    const reqBody = {
      swipeReceiver: currentUser.id,
      isLike,
    };
    http.post(api.saveSwipe(), reqBody).then(response => {
      console.log(response);
      if (isLike) {
        fetchLikedUsers();
      } else {
        fetchPassedUsers();
      }
    }).catch(err => {
      console.error(err);
    });
    goNextUser();
  };

  const handleClickRemoveSwipe = (userId, isLike) => {
    http.delete(api.removeSwipe(), {swipeReceiver: userId}).then(response => {
      console.log(response);
      if (isLike) {
        fetchLikedUsers();
      } else {
        fetchPassedUsers();
      }
    }).catch(err => {
      console.error(err);
    });
  };

  const goNextUser = () => {
    setCurrentUserIdx(prevIdx => prevIdx + 1);
  };

  // TODO: "disable" the delete button until calling API is successful to avoid double delete
  const renderSwipedUsers = (users, isLike) => (
    <ul>
      {users.map(user =>
        <li key={user.id}>
          <div>{user.first_name}, {calculateAge(user.year_of_birth)}</div>
          <div>
            <button onClick={() => handleClickRemoveSwipe(user.id, isLike)}>x</button>
          </div>
        </li>
      )}
    </ul>
  );

  const renderUserCard = () => (
    <>
      <div className="user-card-img">
        <img src={currentUser.picture} alt={currentUser.first_name}/>
      </div>
      <div className="user-card-info">
        {currentUser.first_name}, {calculateAge(currentUser.year_of_birth)}
      </div>
      <div className="user-card-action">
        <button onClick={() => handleSwipe(false)}>x</button>
        <button onClick={() => handleSwipe(true)}>&#9825;</button>
      </div>
    </>
  );

  // TODO: may need to extract these sections to components when logic goes complicated
  return (
    <div className="App">
      <header>
        <h1>Tinder (low cost version, WIP)</h1>
      </header>
      <main>
        <div className="swiped-users">
          <h3>Passed Users</h3>
          {renderSwipedUsers(passedUsers, false)}
        </div>
        <div className="user-card">
          {currentUserIdx >= users.length ? (
            <p className="user-card-msg" onClick={fetchUsersForSwipe}>Ran out of users! Click here to refresh</p>
          ) : (
            renderUserCard()
          )}
        </div>
        <div className="swiped-users">
          <h3>Liked Users</h3>
          {renderSwipedUsers(likedUsers, true)}
        </div>
      </main>
    </div>
  );
}

export default App;
