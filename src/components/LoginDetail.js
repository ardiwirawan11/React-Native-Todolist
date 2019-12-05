import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ToastAndroid
} from 'react-native';
import FormLogo from './FormLogo';
import { Form, Item, Input, Label } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import * as authType from '../redux/type/AuthType';
import { connect } from 'react-redux'
import { auth } from '../redux/action/AuthAction';
class LoginDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    header: null
  };

  handleUsername(val) {
    this.setState({
      username: val
    });
  }

  handlePassword(val) {
    this.setState({
      password: val
    });
  }

  async handleLogin() {
    const { username, password } = this.state;
    try {
      const apiLogin = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization':'TOKEN'
        },
        url:
          'http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/auth/',
        data: JSON.stringify({
          username,
          password
        })
      });
      console.log(apiLogin.data);
      if (apiLogin.data.token) {
        this.props.FetchToken(apiLogin.data.token);
        await AsyncStorage.setItem('@token', apiLogin.data.token);
        this.props.navigation.navigate('Profile', {
          username: this.state.username,
          password: this.state.password
        });
      }
    } catch (e) {
      console.log(e);
      ToastAndroid.show(
        'Wrong user name & password. Try again!',
        ToastAndroid.SHORT
      );
    }
  }

  componentDidMount() {
    console.log('auth redux', this.props.auth);
    if (this.props.auth.data) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../img/Background1.jpg')}
          style={styles.background}>
          <FormLogo />
          <Form style={styles.form}>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Username</Label>
              <Input
                style={styles.label}
                onChangeText={val => this.handleUsername(val)}
              />
            </Item>
            <Item floatingLabel last style={styles.item}>
              <Label style={styles.label}>Password</Label>
              <Input
                style={styles.label}
                secureTextEntry
                onChangeText={val => this.handlePassword(val)}
              />
            </Item>
          </Form>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleLogin()}>
              <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}>Belum punya akun?</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}>
              <Text style={styles.signupButton}> Daftar di sini</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  signupTextCont: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  button: {
    width: 300,
    backgroundColor: '#57BC90',
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  form: {
    justifyContent: 'center',
    width: '70%',
    marginLeft: 50
  },
  label: {
    color: '#015249'
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#015249'
  }
});

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    // FetchToken is the name our created at this time
    FetchToken: token => dispatch(auth(token))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(LoginDetail);
