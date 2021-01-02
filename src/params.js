import { Dimensions } from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Proporção do painel superior na tela
  difficultLevel: 0.1,

  getColumnsAmount() {
    const { width } = Dimensions.get('window');

    return Math.floor(width / this.blockSize);
  },

  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height;
    const boardeHeight = totalHeight * (1 - this.headerRatio);

    return Math.floor(boardeHeight / this.blockSize);
  },
};

export default params;
