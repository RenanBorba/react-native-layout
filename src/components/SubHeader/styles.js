import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    flexDirection: 'row'
  },

  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    marginRight: metrics.padding
  },

  profileInfo: {
    flex: 1
  },

  name: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5
  },

  bio: {
    fontSize: fonts.regular,
    color: colors.regular,
    marginTop: 5
  },

  buttonContainer: {
    flexDirection: 'row',
    margin: 10
  },

  firstButton: {
    marginRight: 10
  }
});

export default styles;