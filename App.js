/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>
          {params.getRowsAmount()}
          X
          {params.getRowsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened mined />
        <Field opened mined exploded />
        <Field flagged />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
  },
});
