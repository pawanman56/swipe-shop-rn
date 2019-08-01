import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Landing extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});