import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from '~/navigation';
import theme from './src/assets/theme';
import { API } from '~/services';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  const getConfiguration = async () => {
    try {
      const configResult = await API.getAPIConfiguration();
      console.warn('CONFIGURATION', configResult?.data);
    } catch (error) {
      console.warn('Failed to get api configs', error?.message);
    }
  };

  useEffect(() => {
    getConfiguration();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
