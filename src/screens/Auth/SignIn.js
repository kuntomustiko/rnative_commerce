import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationHelpersContext} from '@react-navigation/native';

const SignIn = navigation => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>SignIn Component</Text>
      <Button title="SignUp" press={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default SignIn;
