import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import VTManLogo from '../../components/VTManLogo';
import { switchToBuuTaSceen } from '../NavigationControler';

export default class RBSplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loaded: false
    };
  }

  componentDidMount(){
      try {
        this.startTimer();
        SplashScreen.hide();
      } catch (error) {
          
      }
      if(this.state.loaded){
          this.switchToMainScreen();
      }
  }

  componentDidUpdate(){
    if(this.state.loaded){
        this.switchToMainScreen();
    }
  }

  componentWillUnmount(){
    this.clearTimer();
  }

  switchToMainScreen = () => {
      switchToBuuTaSceen();
  }

  startTimer = () => {
      this.timer = setTimeout(() => {
        this.setState({loaded: true})
    }, 2000);
  }

  clearTimer = () => {
      this.timer !== undefined ? clearTimeout(this.timer) : null;
  }

  render() {
    return (
      <View style={styles.container}>
        <VTManLogo title="Welcome To VTMan"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
