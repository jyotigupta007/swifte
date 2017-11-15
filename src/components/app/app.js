import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../login/login';
import SignupScreen from '../signup/signup';

// class Loading extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      headerTitle: 'Signup',
    },
  },
}, {
  initialRouteName: 'Signup'
});

export default RootNavigator;