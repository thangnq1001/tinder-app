const BACKEND_URL = 'http://localhost:3001';
const USERS_ENDPOINT = '/api/v1/users';

const api = {
  getUsers: () => `${BACKEND_URL}${USERS_ENDPOINT}`,
  getUserById: (id) => `${BACKEND_URL}${USERS_ENDPOINT}/${id}`,
}

export default api;
