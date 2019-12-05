import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Right,
  Button,
  Icon
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getUser } from '../redux/action/UserAction'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : {}
    }
  }

  componentDidMount() {
    this.getData();
    console.log('auth redux', this.props.auth) 
    // check first: position/property name's of auth data value using console.log
    this.props.getUserListData(this.props.auth.data)
  }

  getData = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      // await this.setState({ token:token})
      console.log('This is token sayang', token);
    } catch (e) {
      console.log('No token provided');
    }
  };

  async handleLogout() {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Home');
  }

  static navigationOptions = {
    title: 'Detail Profile',
    headerStyle: {
      backgroundColor: '#57BC90'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  render() {
    console.log(this.props.user)
    return (
      <Container>
        <Header style={{ backgroundColor: '#FDFDFD' }}>
          <Right>
            <TouchableOpacity
              onPress={() => this.handleLogout()}
              style={{ backgroundColor: '#FDFDFD', marginRight: 20 }}>
              {/* <Text style={{ color: '#015249', fontSize: 18 }}>Keluar</Text> */}
              <Icon name="md-log-out" style={{ color: '#015249' }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.headerContent}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'
                    }}
                  />
                  <Text style={styles.name}>{this.props.user.data.username}</Text>
                  {/* <Text style={styles.userInfo}>{this.props.navigation.state.params.email} </Text> */}
                  <Text style={styles.userInfo}>{this.props.user.data.email} </Text>
                </View>
                <View
                  style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
                />
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 20,
    color: '#015249'
  },
  header: {
    backgroundColor: '#ffffff'
  },
  headerContent: {
    padding: 30,
    alignItems: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#ffffff',
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: '#015249',
    fontWeight: '600'
  },
  userInfo: {
    fontSize: 16,
    color: '#015249',
    fontWeight: '600'
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    // getUserListData is the name our created at this time
    getUserListData : (token) => dispatch(getUser(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
