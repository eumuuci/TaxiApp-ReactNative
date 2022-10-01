import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Map from '../screens/Map';

const StackRoutes = () => {
		const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
			<Stack.Screen name='Map' component={Map} options={{headerShown:false}}/>
		</Stack.Navigator>
	)
}

export default StackRoutes;
