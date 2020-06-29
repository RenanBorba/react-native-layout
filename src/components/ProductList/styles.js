import { StyleSheet } from 'react-native';
import { metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    flexDirection: 'row',
    // quebra de linha
    flexWrap: 'wrap',
    // alinhar ao fim
    justifyContent: 'space-between'
  }
});

export default styles;