import { createStackNavigator, createAppContainer } from 'react-navigation';

import Landing from '../landing';
import DeckSwiper from '../deckSwiper';

const AppNavigation = createStackNavigator(
  {
    Home: Landing,
    DeckSwiper: DeckSwiper
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigation);