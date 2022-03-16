import React from 'react';

// Customizable Area Start
import {StyleSheet, Text, View} from 'react-native';
import {assets, commonStyles} from '../../themes';
import LoginController from './LoginController';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
const {t} = useTranslation();

export default class LoginScreen extends LoginController {
  render() {
    return (
      <SafeAreaView style={styles.container}>
  
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  ...commonStyles,
});
// Customizable Area End
