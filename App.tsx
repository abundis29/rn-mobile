import React from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Navigation } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { configureStore } from './redux/ConfigureStore';
import { PersistGate } from 'redux-persist/es/integration/react'; 
import Loading from './components/Loading/Loading';

const { persistor, store } = configureStore();

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
