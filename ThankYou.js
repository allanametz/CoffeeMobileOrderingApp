import React, { Component } from 'react';
import { Container, Content, View, Right, Button, Icon} from 'native-base';
import {Linking, Image} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

// Our custom files and classes import
import Colors from './Colors';
import Text from './Text';
import Navbar from './Navbar';

export default class Checkout extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      header: null,
    };
  };

  render() {
    var right = (
      <Right style={{ flex: 1 }}>
        <Button
          onPress={() => this.props.navigation.navigate('LocationScreen')}
          transparent>
          <Icon name="home" type="MaterialCommunityIcons" />
        </Button>
      </Right>
    );

    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <Navbar right={right} title="CHECKOUT" />
        <Content padder>
          <View>
            <Text style={{ marginTop: 15, fontSize: 25, textAlign: 'center' }}>
              Thank you for your order!
            </Text>
            <Image source={require('./giphy.gif')} style={styles.image}/>
            <Text style={{ marginTop: 20, fontSize: 18, textAlign: 'center' }}>
              While you wait, follow Dining Services on Social Media!
            </Text>
            <View style={{ marginTop: 10, marginBottom: 10, paddingBottom: 7 }}>
              <Button
                onPress={ ()=>{ Linking.openURL('https://www.facebook.com/VillanovaDiningServices')}}
                style={{ backgroundColor: Colors.navbarBackgroundColor }}
                block
                iconLeft>
                <Icon name="facebook" type="MaterialCommunityIcons" />
                <Text style={{ color: '#fdfdfd' }}>
                  Dining Services Facebook
                </Text>
              </Button>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, paddingBottom: 7 }}>
              <Button
                onPress={() =>
                  Linking.openURL('https://www.twitter.com/VillanovaDiningServices')}
                style={{ backgroundColor: Colors.navbarBackgroundColor }}
                block
                iconLeft>
                <Icon name="twitter" type="MaterialCommunityIcons" />
                <Text style={{ color: '#fdfdfd' }}>
                  Dining Services Twitter
                </Text>
              </Button>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, paddingBottom: 7 }}>
              <Button
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/VillanovaDiningServices')}
                style={{ backgroundColor: Colors.navbarBackgroundColor }}
                block
                iconLeft>
                <Icon name="instagram" type="MaterialCommunityIcons" />
                <Text style={{ color: '#fdfdfd' }}>
                  Dining Services Instagram
                </Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  image: {
  height: 250,
  width: 250,
  marginLeft: 50,
  marginRight: 45,
  },
};
