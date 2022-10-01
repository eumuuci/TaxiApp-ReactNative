import React, {useEffect, useState} from 'react';
import { PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import EventBox from '../../components/EventBox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setOrigin } from '../../slices/navSlice';

import {
Container,
UserHeader,
Greetings,
Username,
SearchBar,
SearchBarText,
Separator,
RecentTravellsButton,
RecentTravellsText,
ItemTile,
Map,
FavoritesView
} from './styles';
import FavoriteBox from '../../components/FavoriteBox';

const Home = () => {
	const [hour, setHour] = useState('');
	const [region, setRegion] = useState(null);
	const dispatch = useDispatch();
	const navigation = useNavigation();
	let time = new Date().getHours();

	useEffect(()=>{
		if(time <= 11){
			setHour('Bom dia')
		}else if(time <= 18){
			setHour('Boa tarde')
		}else{
			setHour('Boa noite')
		}
	},[])

	useEffect(() => {
		getUserLocation()
	},[])

	function getUserLocation(){
		Geolocation.getCurrentPosition( data => {
			setRegion({
				latitude: data.coords.latitude,
				longitude: data.coords.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
				description: "Essa é sua localização atual!"
			})
		}, (err) => { console.log(err) },{
			enableHighAccuracy: true,
			timeout: 2000,
		});

		region ? dispatch(setOrigin(region)) : ""
	};
	return (
		<Container>
			<UserHeader>
				<Greetings>{hour},</Greetings>
				<Username>GitHub tester</Username>
			</UserHeader>

			<EventBox/>

			<SearchBar
			onPress={ () => navigation.navigate('Map')}
			disabled={region === null}>
				<Icon name='magnify' size={30} color='#222222'/>
				<SearchBarText>{ region ? "Para onde?" : "sem local :("}</SearchBarText>

				<Separator/>

				<RecentTravellsButton>
					<Icon name='update' size={30} color='#222222'/>
					<RecentTravellsText>Recentes</RecentTravellsText>
				</RecentTravellsButton>
			</SearchBar>

			<FavoritesView>

			<FavoriteBox/>
			</FavoritesView>

			<ItemTile>Perto de você</ItemTile>

			<Map>
			<MapView
				onMapReady={ () => {
					PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
						.then( ()=>{
							getUserLocation()
						})
				}}
				style={{flex:1, borderRadius:50}}
				region={region}
				minZoomLevel={17}
				showsUserLocation
				loadingEnabled
  		/>
			</Map>
		</Container>
	)
}

export default Home;
