import axios from 'axios';
import { API_BASE_URL_SEC } from 'src/config';
import authService from './authService';

class UsersService {
  listUsers = () => new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${API_BASE_URL_SEC}/v1/users?limit=500`,
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
}

const usersService = new UsersService();

export default usersService;
