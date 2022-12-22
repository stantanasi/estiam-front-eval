import axios from 'axios';
import { API_BASE_URL_SEC } from 'src/config';

class UsersService {
  listUsers = () => new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${API_BASE_URL_SEC}/v1/users`,
      // headers: {}
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
