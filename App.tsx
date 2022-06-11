import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { WebView } from 'react-native-webview';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Home from "./src/pages/Home";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: '#fff',

  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ height: '100%', width: '100%',   overflow:'hidden'}}>
        <WebView
            source={{uri: 'http://qingkong-native.rico.org.cn/'}}
        />
      </View>

    </SafeAreaView>
  );
};
export default App;
