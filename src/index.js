import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {persistStore} from 'redux-persist';
import configureStore from './store';
import {Provider, connect} from 'react-redux';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Login from './components/Login';
import VerifyLogin from './components/VerifyLogin';

const RouterWithRedux = connect()(Router);
const store = configureStore();

const RightGlobe = () => {
  return (<Ionicon name={'ios-globe-outline'} color={'white'} size={20}/>)
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rehydrated: false
    }
  }

  componentWillMount() {
    persistStore(store, {
      storage: AsyncStorage,
      blacklist: ['nav']
    }, () => {
      this.setState({rehydrated: true});
    })
  }

  render() {
    if (!this.state.rehydrated) {
      return <View/>
    }
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root' initial={true} hideTabBar={true}>
            <Scene key='login' component={Login} title={'Đăng nhập'} titleStyle={{
              color: 'white',
              fontSize: 20
            }} navigationBarStyle={{
              backgroundColor: 'rgba(174, 28, 63, 1)'
            }} renderRightButton={RightGlobe}/>
            <Scene key='verifyLogin' component={VerifyLogin} title={'Xác thực'} titleStyle={{
              color: 'white',
              fontSize: 20
            }} navigationBarStyle={{
              backgroundColor: 'rgba(174, 28, 63, 1)'
            }} leftButtonIconStyle={{
              tintColor: 'white'
            }}/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}