import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import GymNavigator from './GymNavigator';

import {sAppLogged} from '../reducers/selectors';

const RootStack = createStackNavigator();

export default function() {
  const logged = useSelector(sAppLogged);
  return (
      <NavigationContainer>
        <RootStack.Navigator>
          {!logged && (
              <>
                <RootStack.Screen name={'Accedi'} component={LoginPage}/>
                <RootStack.Screen name={'Registrati'} component={SignUpPage}/>
              </>
          )}
          {logged && (
              <>
                <RootStack.Screen name={'Gym'} component={GymNavigator}/>
              </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
  );
}
