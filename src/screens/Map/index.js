import React from 'react';
import { KeyboardAvoidingView, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigateCard from "../../components/NavigateCard";
import MapComponent from '../../components/MapComponent';

const Map = () => {
	const Stack = createStackNavigator();
return (
		<KeyboardAvoidingView style={{flex: 1}} behavior="position">
			<MapComponent/>
			<NavigateCard/>
		</KeyboardAvoidingView>
	);
};

export default Map;
