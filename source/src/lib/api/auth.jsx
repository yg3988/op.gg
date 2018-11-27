//  import node_modules
import axios from 'axios';

//  username 중복검사
export const checkUsernameExists = username =>
  axios.get('/api/auth/exists/username/' + username);

export const pageRegister = ({ username, password }) =>
  axios.post('/api/auth/register/local', { username, password });
export const pageLogin = ({ username, password }) =>
  axios.post('api/auth/loing/', { username, password });

export const checkLogged = () => axios.get('/api/auth/check');
export const pageLogout = () => axios.get('/api/auth/logout');
