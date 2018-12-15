import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, NavigatorIOS} from 'react-native';
import {Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Text as NBText,
} from 'native-base';

import Colors from './Colors';
import Navbar from './Navbar';

class CoffeeType extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      header: null,
    };
  };

  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button
          onPress={() => this.props.navigation.navigate('LocationScreen')}
          transparent>
          <Icon name="ios-arrow-back" />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button
          onPress={() => this.props.navigation.navigate('CartScreen')}
          transparent>
          <Icon name="ios-cart" />
        </Button>
      </Right>
    );
    return (
      <View style={styles.container}>
        <Navbar
          left={left}
          right={right}
          title="MENU"
          style={{ fontSize: 25, color: 'white' }}
        />
            <ImageBackground
        source={require('./brick.jpg')}
        style={styles.brickWall}>
     
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HotMenuScreen')}
          style={styles.button2}>
          <Text style={styles.paragraph}>Hot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('IcedMenuScreen')}
          style={styles.button2}>
          <Text style={styles.paragraph}>Iced</Text>
        </TouchableOpacity>
              }} />
         </ImageBackground> 
      </View>
    );
  }
}

export default CoffeeType;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paragraph: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Optima',
  },
    brickWall:{
     height: 800,
     width: 550,
  },

  button2: {
    marginTop: 65,
    paddingTop: 15,
    paddingBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: '15%',
    borderWidth: 2,
    borderColor: 'grey',
    top: 50,
    width: 170,
    height: 170,
    backgroundColor: '#003366',
    borderRadius: 100,
  },
});
