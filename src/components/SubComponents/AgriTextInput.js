import React, {Component} from 'react';
import {TextInput, View, TouchableHighlight} from 'react-native';

export default class AgriTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    }
  }

  render() {
    let {height} = this.props.style;
    let {keyboardType, placeholder, value, secureTextEntry, onChangeText} = this.props;
    let color = 'rgba(180, 180, 180, 1)';
    let agri_red = 'rgba(174, 28, 63, 1)';
    return (
      <TouchableHighlight underlayColor={'transparent'} onPress={() => this.textInput.focus()}>
        <View style={[
          {
            flexDirection: 'row',
            borderColor: this.state.isFocused ? agri_red : color,
            borderWidth: 1,
            borderRadius: height / 2 - 8,
            alignItems: 'center'
          },
          this.props.style
        ]}>
          <View style={{
            height: height,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {this.props.children}
          </View>
          <View style={{
            height: height - 2,
            width: 1,
            backgroundColor: this.state.isFocused ? agri_red : color
          }}/>
          <TextInput ref={input => this.textInput = input} style={{
            flex: 1,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 14
          }} underlineColorAndroid={'transparent'} autoCorrect={false} placeholderTextColor={'rgba(200, 200, 200, 1)'} keyboardType={keyboardType} placeholder={placeholder} value={value} 
            onFocus={() => this.setState({isFocused: true})}
            onEndEditing={() => this.setState({isFocused: false})}
            secureTextEntry={secureTextEntry} onChangeText={onChangeText.bind(this)}/>
        </View>
      </TouchableHighlight>
    )
  }
}