import React from 'react';
import {StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, NavigatorIOS} from 'react-native';

class Location extends React.Component {
  static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
			header: null,
		}
	};

  render() {
      return (
    <View style={styles.container}>
    <ImageBackground
        source={require('./brick.jpg')}
        style={styles.brickWall}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('CoffeeScreen')} style={styles.button2}>
        <Text style={styles.paragraph}>Bartley</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('CoffeeScreen')}
        style={styles.button2}>
        <Text style={styles.paragraph}>Connelly</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('CoffeeScreen')}
        style={styles.button2}>
        <Text style={styles.paragraph}>CEER</Text>
      </TouchableOpacity>
            }} />
            </ImageBackground>
    </View>
  );
}
}



export default Location;
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
    marginTop:20,
    paddingTop:15,
    paddingBottom:20,
    marginLeft:20,
    marginRight:40,
    alignItems: 'center',
    justifyContent: 'center',
    left: '16%',
    borderColor: 'grey',
    borderWidth: 2,
    top: 70,
    width: 170,
    height: 170,
    backgroundColor: '#003366',
    borderRadius: 100,
  },
});