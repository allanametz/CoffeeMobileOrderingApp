import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, AsyncStorage, StyleSheet, Switch } from 'react-native';
import { View, Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Text as NBText } from 'native-base';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import Navbar from './Navbar';
import Colors from './Colors';
import Text from './Text';

export default class CreditCard extends Component {
    static navigationOptions = ({ navigation}) => {
    const params = navigation.state.params || {};
    return {
      header: null,
    }
  };
  
  _onChange = form => console.log(form);
  _onFocus = (field) => console.log("focusing", field);

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate('CheckoutScreen')} transparent>
          <Icon name="ios-arrow-back" size={38} style={{fontSize: 38}} />
        </Button>
      </Left>
    );
    return (
           <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} title={"CHECKOUT"} style={{ fontSize: 25, color: 'white'}}/>
        <Content>
            <CreditCardInput
              autoFocus

              requiresName
              requiresCVC
              requiresPostalCode

              cardScale={1.0}
              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          )
        }
      <View style={{ marginTop: 10, marginBottom: 10, paddingBottom: 7 }}>
              <Button
                onPress={() => this.props.navigation.navigate('ThankYouScreen')}
                style={{ backgroundColor: Colors.navbarBackgroundColor }}
                block
                iconLeft>
                <Icon name="coffee-outline" type="MaterialCommunityIcons" />
                <Text style={{ color: '#fdfdfd' }}> Pay!</Text>
              </Button>
            </View>
            </Content>
      </Container>
    );
  }
}

const s = StyleSheet.create({
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});
