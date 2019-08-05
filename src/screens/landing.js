import React, { Component } from 'react';
import { 
  Container,
  Content,
  Item,
  Picker,
  Icon,
  Button,
  Text,
  View
} from 'native-base';

import RadioButton from './components/radioButton';

const options = [
  {
    key: 'men',
    text: 'Men',
    icon: 'user',
    iconType: 'SimpleLineIcons',
  },
  {
    key: 'women',
    text: 'Women',
    icon: 'user-female',
    iconType: 'SimpleLineIcons',
  }
];

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedValue: null
    };
  }
  
  onValuePicked(value: string) {
    this.setState({
      pickedValue: value
    });
  }

  render() {
    return (
      <Container>
        <Content style={{ padding: 15 }}>

          <View style={{ flex: 1, marginBottom: 15 }}>
            <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 7 }}>You are</Text>
            <RadioButton options={options} />
          </View>

          <View style={{ flex: 1, marginBottom: 15 }}>
            <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 7 }}>And you're looking for</Text>
            
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="You're interested in"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.pickedValue}
                onValueChange={this.onValuePicked.bind(this)}
              >
                <Picker.Item label="Shirts" value="key0" />
                <Picker.Item label="Pants" value="key1" />
                <Picker.Item label="Shoes" value="key2" />
                <Picker.Item label="Beauty & Health Care" value="key3" />
                <Picker.Item label="Accessories" value="key4" />
                <Picker.Item label="Seasonial" value="key5" />
              </Picker>
            </Item>
          </View>

          <Button
            block
            onPress={() => this.props.navigation.navigate('DeckSwiper')}
            style={{ backgroundColor: '#82589F' }}
          >
            <Text>Start Swiping</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
