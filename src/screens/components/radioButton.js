import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';

export default class RadioButton extends Component {
  state = {
    isSelected: null,
  };

  render() {
    const { options } = this.props;
    const { isSelected } = this.state;
    const { radioContainer, radioButton, radioButtonDefault, radioButtonSelected } = styles;

    return (
      <View style={radioContainer}>
        {options.map(item => {
          return (
            <View
              style={radioButton}
              key={item.key}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    isSelected: item.key
                  });
                }}
              >
                { 
                  (isSelected === item.key) ? (
                    <View style={radioButtonSelected}>
                      <Text style={{ color: '#ffffff' }}>{item.text}</Text>
                    </View>
                  ) : (
                    <View style={radioButtonDefault}>
                      <Text style={{ color: '#82589F' }}>{item.text}</Text>
                    </View>
                  )
                }
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  radioContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  radioButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  radioButtonDefault: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#82589F',
    borderRadius: 10
  },

  radioButtonSelected: {
    flex: 1,
    color: '#ffffff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#82589F',
    borderWidth: 2,
    borderColor: '#82589F',
    borderRadius: 10
  }
});
