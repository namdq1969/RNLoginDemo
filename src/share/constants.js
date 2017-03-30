import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const images = {
  agribankLogo: require('../../resources/agribankLogo.jpg')
}

const styles = {
  shadow: {
    elevation: 3,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.2
  }
};

export default {
  styles,
  images,
  height,
  width
}