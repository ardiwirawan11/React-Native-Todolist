import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../src/img/Background1.jpg')}
          style={styles.background}>
          <View style={styles.container}>
            <Image
              style={{width: 150, height: 100}}
              source={require('../../src/img/REDU.png')}
            />
            <Text style={styles.logoText}>
              Aplikasi untuk rekreasi dan edukasi
            </Text>
            <Text style={styles.subText}>
              REDU App dapat menjadi sahabat terbaik kamu dalam mencari tempat
              wisata yang berfaedah dan penuh hikmah.
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Details');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Todo');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Todo</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
  logoText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#015249',
  },
  subText: {
    marginVertical: 15,
    fontSize: 12,
    textAlign: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 100,
    fontWeight: '900',
    color: '#015249',
  },
  button: {
    width: 320,
    backgroundColor: '#57BC90',
    borderRadius: 20,
    marginVertical: 5,
    paddingVertical: 10,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
