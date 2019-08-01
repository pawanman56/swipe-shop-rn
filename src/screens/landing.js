import React, { Component } from 'react';
import { Container, Content, Body, Form, Item, ListItem, Left, Right, Radio, Picker, Icon, Button, Text } from 'native-base';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: 'men',
      pickedValue: undefined
    };
  }

  onValueSelected(value: string) {
    this.setState({
      isSelected: value
    });
  }
  
  onValuePicked(value: string) {
    this.setState({
      pickedValue: value
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>

            <ListItem>
              <Left>
                <Text>Men</Text>
              </Left>
              <Right>
                <Radio
                  selected={(this.state.isSelected === "men")}
                  value="men"
                  onPress={this.onValueSelected.bind(this)}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Women</Text>
              </Left>
              <Right>
                <Radio
                  selected={(this.state.isSelected === "women")}
                  value="women"
                  onPress={this.onValueSelected.bind(this)}
                />
              </Right>
            </ListItem>

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

            <Button
              block
              onPress={() => this.props.navigation.navigate('DeckSwiper')}
            >
              <Text>Start Swiping</Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}