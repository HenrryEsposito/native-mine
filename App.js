/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/functions';
import params from './src/params';

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>
          {params.getColumnsAmount()}
          X
          {params.getRowsAmount()}
        </Text>
        
        <View style={styles.board}>
          <MineField board={this.state.board}></MineField>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
    paddingTop: params.blockSize,
    paddingBottom: params.blockSize,
  }
});
