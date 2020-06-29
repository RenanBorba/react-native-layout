import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors } from "~/styles";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    marginBottom: metrics.padding,
    // 2 colunas
    width: (width - 45) / 2
  },

  imageContainer: {
    padding: metrics.padding
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain'
  },

  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    top: metrics.padding,
    color: colors.primary,
    zIndex: 1
  },

  infoContainer: {
    borderTopWidth: 1,
    borderColor: colors.lighter
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker
  },

  description: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: fonts.smaller
  },

  price: {
    textAlign: 'center',
    color: colors.light,
    fontSize: fonts.regular,
    marginTop: 5
  }
});

export default styles;