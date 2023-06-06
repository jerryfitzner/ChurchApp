import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Youtube from './Components/Youtube';
import Google from './Components/Google';
import Podcast from './Components/Podcast';
import PrayerGuide from './Components/PrayerGuide';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Youtube />
      <Google />
      <Podcast />
      <PrayerGuide />
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
