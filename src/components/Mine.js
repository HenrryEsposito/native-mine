import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default (props) => (
  <View style={styles.container}>
    <View style={styles.coreMine} />
    <View style={styles.line} />
    <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]} />
    <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
    <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coreMine: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    alignSelf: 'center',
    height: 3,
    width: 15,
    borderRadius: 3,
    backgroundColor: 'black',
  },
});
