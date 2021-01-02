/* eslint-disable arrow-body-style */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Field from './Field';

export default (props) => {
  const rows = props.board.map((row, rowIndex) => {
    const columns = row.map((column, columnIndex) => {
      return <Field {...column} key={columnIndex} />;
    });

    return <View style={{ flexDirection: 'row' }} key={rowIndex}>{columns}</View>;
  });

  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
});
