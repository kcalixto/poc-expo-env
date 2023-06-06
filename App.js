import { StyleSheet, Text, View } from 'react-native';
import { TESTE } from '@env';

export default function App() {
  console.log("env: ", TESTE);

  return (
    <View style={styles.container}>
      <Text>{TESTE}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
