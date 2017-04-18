/**
 * Created by BoB on 4/5/2017.
 */
import axios from 'axios';
export default function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['x-access-token'];
    localStorage.removeItem('token');
  }
}
export function isAuthenticated() {
  return !!localStorage.token;
}
export function saveUser(user) {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
}
export function getUser() {
  return JSON.parse(localStorage.user);
}
