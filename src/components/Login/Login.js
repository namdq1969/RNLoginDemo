import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  ScrollView,
  Keyboard
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';

import CONSTANTS from '../../share/constants';

import AgriTextInput from '../SubComponents/AgriTextInput';

const styles = {
  agri_input_style: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      idNumber: ''
    }
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow(e) {
    let newHeight = -e.endCoordinates.height + 240;
    this.scrollView.scrollTo({x: 0, y: newHeight});
  }

  _keyboardDidHide(e) {
    this.scrollView.scrollTo({x: 0, y: 0});
  }

  _validateInput() {
    if (this.state.phone !== '' && this.state.password !== '' && this.state.idNumber !== '') {
      return true;
    }
    return false;
  }

  render() {
    let place_holder_0 = 'Nhập số điện thoại';
    let place_holder_1 = 'Nhập mật khẩu';
    let place_holder_2 = 'Nhập số CMND/Hộ chiếu';
    let agri_red = 'rgba(174, 28, 63, 1)';
    return (
      <View style={{
        flex: 1,
        marginTop: 60
      }}>
        <StatusBar barStyle={'light-content'} hidden={false}/>
        <ScrollView ref={scrollView => this.scrollView = scrollView} showsVerticalScrollIndicator={false}>
          <Image style={{
            marginTop: 20,
            marginBottom: 10,
            height: 100,
            width: 100,
            alignSelf: 'center'
          }} source={CONSTANTS.images.agribankLogo}/>
          <Text style={{
            alignSelf: 'center',
            color: agri_red,
            fontSize: 18
          }}>Agribank M-Plus</Text>
          <Text style={{
            alignSelf: 'center',
            color: 'rgba(140, 140, 140, 1)',
            fontSize: 12
          }}>Ngân hàng di động</Text>
          <AgriTextInput style={styles.agri_input_style} keyboardType={'numeric'} placeholder={place_holder_0} value={this.state.phone} onChangeText={(text) => {
            this.setState({phone: text});
          }}>
            <Ionicon name={'ios-phone-portrait-outline'} color={agri_red} size={20}/>
          </AgriTextInput>
          <AgriTextInput style={styles.agri_input_style} secureTextEntry={true} placeholder={place_holder_1} value={this.state.password} onChangeText={(text) => {
            this.setState({password: text});
          }}>
            <Ionicon name={'ios-unlock-outline'} color={agri_red} size={20}/>
          </AgriTextInput>
          <AgriTextInput style={styles.agri_input_style} keyboardType={'numeric'} placeholder={place_holder_2} value={this.state.idNumber} onChangeText={(text) => {
            this.setState({idNumber: text});
          }}>
            <Ionicon name={'ios-contact-outline'} color={agri_red} size={20}/>
          </AgriTextInput>

          <TouchableHighlight style={[
            CONSTANTS.styles.shadow, {
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              height: 40,
              backgroundColor: 'transparent'
            }
          ]} underlayColor={'transparent'} onPress={() => {
            if (this._validateInput()) {
              this.props.requestLogin({phone: this.state.phone, password: this.state.password, idNumber: this.state.idNumber});
            }
          }}>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: agri_red
            }}>
              <Text style={{
                color: 'white',
                fontSize: 14
              }}>ĐĂNG NHẬP</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{
            marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            height: 40,
            alignSelf: 'center',
            backgroundColor: 'transparent'
          }} underlayColor={'transparent'} onPress={() => console.log('Quên mật khẩu')}>
            <Text style={{
              color: 'black',
              fontSize: 14
            }}>Quên mật khẩu?</Text>
          </TouchableHighlight>
          <Text style={{
            alignSelf: 'center',
            color: 'black',
            fontSize: 14
          }}>{'Chưa đăng ký tại Agribank? '}
            <Text style={{
              color: agri_red,
              fontWeight: '600'
            }} onPress={() => console.log('Đăng ký')}>Đăng ký</Text>
          </Text>
          <TouchableHighlight style={{
            marginTop: 20,
            marginLeft: 20,
            width: 190
          }} underlayColor={'transparent'} onPress={() => Communications.phonecall('1900545527', true)}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <View style={[
                CONSTANTS.styles.shadow, {
                  backgroundColor: agri_red,
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              ]}>
                <Ionicon name={'ios-call-outline'} color={'white'} size={28}/>
              </View>
              <Text style={{
                color: agri_red
              }}>Hotline 1900 54 55 27</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}