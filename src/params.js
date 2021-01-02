import { Dimensions } from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Proporção do painel superior na tela
  difficultLevel: 0.1,

  getColumnsAmount() {
    const totalWidth = Dimensions.get('window').width;

    return Math.floor(totalWidth / this.blockSize) - 1;
  },

  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height;
    const boardeHeight = totalHeight * (1 - this.headerRatio);

    return Math.floor(boardeHeight / this.blockSize) - 1;
  },
};

export default params;
