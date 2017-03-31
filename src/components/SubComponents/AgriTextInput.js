import React, {Component} from 'react';
import {TextInput, View} from 'react-native';

export default class AgriTextInput extends Component {
  render() {
    let {height} = this.props.style;
    let {keyboardType, placeholder, value, secureTextEntry, onChangeText} = this.props;
    let color = 'rgba(180, 180, 180, 1)';
    return (
      <View style={[{flexDirection: 'row', borderColor: color, borderWidth: 1, borderRadius: height / 2 - 8, alignItems: 'center'}, this.props.style]}>
        <View style={{height: height, width: 30, alignItems: 'center', justifyContent: 'center'}}>
          {this.props.children}
        </View>
        <View style={{height: height - 2, width: 1, backgroundColor: color}}/>
        <TextInput style={{flex: 1, paddingTop: 0, paddingBottom: 0, paddingLeft: 10, paddingRight: 10, fontSize: 14}}  underlineColorAndroid={'transparent'}autoCorrect={false} placeholderTextColor={'rgba(200, 200, 200, 1)'} keyboardType={keyboardType} placeholder={placeholder} value={value} secureTextEntry={secureTextEntry} onChangeText={onChangeText.bind(this)}/>
      </View>
    )
  }
}