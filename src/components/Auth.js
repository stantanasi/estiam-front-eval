import React, {
  useEffect,
  useState
} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import authService from 'src/services/authService';
import { updateUserData } from 'src/actions/accountActions';
import SplashScreen from 'src/components/SplashScreen';

function Auth({ children }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initUserInfo = async () => {
      if (authService.isAuthenticated()) {
        const userId = authService.getConnectedUserId();

        const user = await authService.getUserData(userId);

        await dispatch(updateUserData(user));
      }

      setIsLoading(false);
    };

    initUserInfo();
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.any
};

export default Auth;
