import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, Alert} from 'react-native';
import api from './services/api';
import {AuthProvider} from './_context/AuthProvider';
import {getStorage, setStorage, removeStorage} from './services/storage';

import Routes from './routes';

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          removeStorage('token');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const verifyToken = async () => {
      try {
        const userToken = await getStorage('token');

        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      } catch (err) {}
    };

    verifyToken();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        try {
          const response = await api.post('/auth/signin', {
            email,
            password,
          });

          await setStorage('token', response.data.token);
          await setStorage('user', JSON.stringify(response.data.user));
          dispatch({
            type: 'SIGN_IN',
            token: response.data.token,
          });
        } catch (err) {
          Alert.alert('Atenção!', err.response.data.error);
        }
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
    }),
    [],
  );

  return (
    <AuthProvider values={{authContext, state}}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Routes />
    </AuthProvider>
  );
};

export default App;
