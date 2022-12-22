import axios from 'axios';
import { API_BASE_URL_SEC } from 'src/config';
import authService from './authService';

class UsersService {
  listUsers = () => new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${API_BASE_URL_SEC}/v1/users?limit=1000`,
      headers: {
        'x-access-token': authService.getAccessToken(),
      },
    })
      .then((res) => {
        resolve(res.data.data.users);
      })
      .catch((err) => {
        reject(err);
      });
  });

  createUser = (firstName, lastName, city, phoneNumber, email, password) => new Promise((resolve, reject) => {
    axios.post(`${API_BASE_URL_SEC}/v1/users`, {
      firstName: firstName,
      lastName: lastName,
      city: city,
      phoneNumber: phoneNumber,
      email: email,
      password: password
    }, {
      headers: {
        'x-access-token': authService.getAccessToken(),
      },
    })
      .then((res) => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });

  getUser = (id) => new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${API_BASE_URL_SEC}/v1/users/${id}`,
      headers: {
        'x-access-token': authService.getAccessToken(),
      },
    })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  updateUser = (id, firstName, lastName, city, phoneNumber, email, password) => new Promise((resolve, reject) => {
    axios.put(`${API_BASE_URL_SEC}/v1/users/${id}`, {
      firstName: firstName,
      lastName: lastName,
      city: city,
      phoneNumber: phoneNumber,
      email: email,
      password: password
    }, {
      headers: {
        'x-access-token': authService.getAccessToken(),
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  deleteUser = (id) => new Promise((resolve, reject) => {
    axios.delete(`${API_BASE_URL_SEC}/v1/users/${id}`, {
      headers: {
        'x-access-token': authService.getAccessToken(),
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const usersService = new UsersService();

export default usersService;
