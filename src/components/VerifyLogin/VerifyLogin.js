import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  Keyboard,
  ScrollView
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

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

export default class VerifyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      timeout: 90
    }
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.timeout > 0) {
        this.setState({
          timeout: this.state.timeout - 1
        })
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    clearInterval(this.timer)
  }

  _keyboardDidShow(e) {
    let newHeight = -e.endCoordinates.height + 310;
    this.scrollView.scrollTo({x: 0, y: newHeight});
  }

  _keyboardDidHide(e) {
    this.scrollView.scrollTo({x: 0, y: 0});
  }

  render() {
    let place_holder_0 = 'Nhập mã OTP';
    let agri_red = 'rgba(174, 28, 63, 1)';

    return (
      <View style={{
        flex: 1,
        paddingTop: 60
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
          <Text style={{
            marginTop: 40,
            marginLeft: 70,
            marginRight: 70,
            color: 'black',
            fontSize: 14,
            textAlign: 'center'
          }}>Quý khách vui lòng chờ để nhận mã OTP qua SMS</Text>
          <AgriTextInput style={styles.agri_input_style} keyboardType={'numeric'} placeholder={place_holder_0} value={this.state.otp} onChangeText={(text) => {
            this.setState({otp: text});
          }}>
            <Ionicon name={'ios-phone-portrait-outline'} color={agri_red} size={20}/>
          </AgriTextInput>
          <Text style={{
            marginTop: 40,
            marginLeft: 70,
            marginRight: 70,
            color: 'rgba(120, 120, 120, 1)',
            fontSize: 14,
            textAlign: 'center'
          }}>{'Thời gian chờ: '}
            <Text style={{
              color: 'black',
              fontSize: 16,
              fontWeight: '600'
            }}>{this.state.timeout}
              <Text style={{
                color: 'rgba(120, 120, 120, 1)',
                fontSize: 14,
                fontWeight: '400'
              }}>{' giây'}</Text>
            </Text>
          </Text>
          <TouchableHighlight style={[
            CONSTANTS.styles.shadow, {
              marginTop: 80,
              marginLeft: 20,
              marginRight: 20,
              height: 40,
              backgroundColor: 'transparent'
            }
          ]} underlayColor={'transparent'} onPress={() => console.log('Tiếp tục')}>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: agri_red
            }}>
              <Text style={{
                color: 'white',
                fontSize: 14
              }}>TIẾP TỤC</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}