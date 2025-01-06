import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import Class from './src/Screens/Class';
import {useEffect, useState} from 'react';
import Home from './src/Screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated';
import Students from './src/Screens/Students';

const App = () => {
  const stack = createStackNavigator();
  const drawer = createDrawerNavigator();

  // const [isloading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   SplashScreen.hide();
  // });

  const DrawerNav = ()=>{
    return(
      <drawer.Navigator screenOptions={{headerShown : false}} initialRouteName='Home'>
        <drawer.Screen name="Home" component={Home} />
        <drawer.Screen name="Class" component={Class} />

      </drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} />
        <stack.Screen name="Class" component={Class} />
        <stack.Screen name="DrawerNav" component={DrawerNav} />
        <stack.Screen name='Students' component={Students}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
