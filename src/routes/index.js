import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuthContext} from '../_context/AuthProvider';

import Login from '../screens/Login';
import Feed from '../screens/Feed';

// Images
import logo from '../assets/images/instagram.png';

// Components
import {Loading} from '../components';
import {BtnTransparent} from './styles';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  const {authContext} = useAuthContext();

  const LogoTitle = () => <Image source={logo} />;
  const LogoutButton = () => (
    <BtnTransparent onPress={() => authContext?.signOut()}>
      <Text>Sair</Text>
    </BtnTransparent>
  );

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTitle: (props) => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerRight: () => <LogoutButton />,
      }}>
      <AuthStack.Screen name="Feed" component={Feed} />
    </AuthStack.Navigator>
  );
};

const Routes = () => {
  const {state} = useAuthContext();

  if (state?.isLoading) {
    <Loading />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {state.userToken === null ? (
          <RootStack.Screen name="Login" component={Login} />
        ) : (
          <RootStack.Screen name="Main" component={AuthStackScreen} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
