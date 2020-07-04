import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Easing,
  ScrollView,
  Animated,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {store} from '../store/setup';
import Details from '../container/home/details';
import Home from '../container/home';

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  const slideFromRight = {transform: [{translateX}]};
  return slideFromRight;
};

let FadeIn = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });

  return {opacity};
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const width = layout.initWidth;
      const {index, route} = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';
      return {
        fadeIn: FadeIn(index, position),
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  };
};
const appStack = createStackNavigator({ 
  Home:Home,
  Details:Details
  
}, 
  {
    transitionConfig: TransitionConfiguration,
    headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
  });
const App = createAppContainer(
  createSwitchNavigator(
    {
     AppStack:appStack 
    },
    {
      initialRouteName: 'AppStack',
    },
  ),
);

class Navigation extends React.Component {
    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
    }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Navigation;
