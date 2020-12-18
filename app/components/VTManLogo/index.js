import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../../resources/image/vtmanlogo.png';

export default class VTManLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <Image source={Logo} style={{ width: 300, height: 300}}/>
        <Text style={styles.welcomeText}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#006CAB'
    }
});