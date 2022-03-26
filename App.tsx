import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import Loading from "./components/Loading/Loading";

const { persistor, store } = ConfigureStore();

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
