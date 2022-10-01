import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
		 <NavigationContainer>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='dark-content'
				/>
				<Routes/>
		 </NavigationContainer>
    </Provider>
  );
}

export default App;
