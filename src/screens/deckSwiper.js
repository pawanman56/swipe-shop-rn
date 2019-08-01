import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const cards = [
  {
    text: 'Shirt One',
    name: 'One',
    price: '123',
    image: require('../assests/images/shirt-1.jpg'),
  },
  {
    text: 'Shirt Two',
    name: 'Two',
    price: '123',
    image: require('../assests/images/shirt-2.jpg'),
  },
  {
    text: 'Shirt Three',
    name: 'Three',
    price: '123',
    image: require('../assests/images/shirt-3.jpg'),
  },
  {
    text: 'Shirt Four',
    name: 'Four',
    price: '123',
    image: require('../assests/images/shirt-4.jpg'),
  }
];

export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Text>{item.name}</Text>
                </CardItem>
                <CardItem>
                  <Text>Rs. {item.price}</Text> 
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}