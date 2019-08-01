import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import DeckSwipe from './deckSwiper';

class Landing extends Component {
  render() {
    const { container } = styles;

    return(
      <View style={container}>
        <Text>Home Screen</Text>
        <Button
          title="Start Swiping"
          onPress={() => this.props.navigation.navigate('DeckSwiper')}
        />
      </View>
    )
  }
}

const AppNavigation = createStackNavigator(
  {
    Home: Landing,
    DeckSwiper: DeckSwipe
  },
  {
    initialRouteName: 'Home'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default createAppContainer(AppNavigation);