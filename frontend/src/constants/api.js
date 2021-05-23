const BACKEND_URL = 'http://localhost:3001';
const USERS_ENDPOINT = '/api/v1/users';
const SWIPES_ENDPOINT = '/api/v1/swipes';

const api = {
  getUsers: () => `${BACKEND_URL}${USERS_ENDPOINT}`,
  getUserById: (id) => `${BACKEND_URL}${USERS_ENDPOINT}/${id}`,
  saveSwipe: () => `${BACKEND_URL}${SWIPES_ENDPOINT}`,
  getSwipes: (isLike) => `${BACKEND_URL}${SWIPES_ENDPOINT}?isLike=${isLike === true || isLike === false ? isLike : ''}`,
  removeSwipe: () => `${BACKEND_URL}${SWIPES_ENDPOINT}`,
}

export default api;
