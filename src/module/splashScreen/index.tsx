import React from 'react';

// Customizable Area Start
import {Image, StyleSheet, StatusBar, TextInput, View} from 'react-native';
import {commonStyles, assets} from '../../themes';

import SplashController from './SplashController';

export default class SplashScreen extends SplashController {
  render() {
    return (
      <>
        <StatusBar hidden />
        <Image source={assets.splash} style={styles.image} />
      </>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  ...commonStyles,
  image: {
    resizeMode: 'stretch',
    width:"100%"
  },
});
// Customizable Area End
