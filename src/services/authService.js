import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { API_BASE_URL_SEC } from 'src/config';

class AuthService {
  login = (email, password) => new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${API_BASE_URL_SEC}/v1/login`,
      data: {
        email,
        password
      }
    })
      .then((res) => {
        this.setToken(res.data.token);
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  })

  setToken = (token) => {
    if (token) {
      localStorage.setItem('accessToken', token);
    } else {
      localStorage.removeItem('accessToken');
    }
  }

  logout = () => {
    this.setToken(null);
  }

  getUserData = (userId) => new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${API_BASE_URL_SEC}/v1/users/${userId}`,
      headers: {
        'x-access-token': this.getAccessToken()
      }
    })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  })

  getAccessToken = () => localStorage.getItem('accessToken');

  isAuthenticated = () => !!this.getAccessToken(); // Boolean

  getConnectedUserId = () => {
    const accessToken = this.getAccessToken();

    const decodedToken = jwtDecode(accessToken);

    return decodedToken.id;
  }
}

const authService = new AuthService();

export default authService;
