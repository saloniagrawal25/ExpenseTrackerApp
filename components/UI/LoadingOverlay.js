import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default LoadingOverlay;
