import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from '~/navigation';
import theme from './src/assets/theme';
import store, { persistor } from '~/store';
import { fetchConfiguration } from '~/store/ducks/app';
import { fetchGenres, fetchTrending } from '~/store/ducks/movies';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  useEffect(() => {
    store.dispatch(fetchConfiguration());
    store.dispatch(fetchGenres());
    store.dispatch(fetchTrending());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
