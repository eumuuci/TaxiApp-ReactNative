import React, {useEffect, useRef} from 'react';
import { View, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {useDispatch, useSelector} from 'react-redux';
import {selectOrigin, selectDestination, setTravelTimeInformation} from '../../slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from '@env';

const MapComponent = () => {
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);
	const mapRef = useRef(null);
	const dispatch = useDispatch();
	const {width, height} = Dimensions.get('screen');
	const APIID = "BcrLs0ieDkM1PJCKHWl3YtXLgsYri"

	useEffect( () => {
		if(!origin || !destination) return;

		mapRef.current.fitToSuppliedMarkers(["Você","Destino"], {
			edgePadding: {top:150, right: 150, bottom:150, left:150},
		});

	},[origin,destination]);

	useEffect( () => {
		if(!origin || !destination) return;

		const getTravelTime = async () => {
			fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin?.latitude}, ${origin?.longitude}&destinations=${destination?.location.lat},${destination?.location.lng}&key=${GOOGLE_MAPS_APIKEY}`)
			.then(res => res.json()).then(data => {
				dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
				console.log(data)
			}).catch(err => console.log(err))
		}

		getTravelTime();
	},[origin,destination,GOOGLE_MAPS_APIKEY] )

	return (
		<View>
			<MapView
				ref={mapRef}
				style={{width: width, height: height / 2}}

				loadingEnabled
				initialRegion={{
					latitude: origin?.latitude,
					longitude: origin?.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}>

				{origin && destination &&(
					<MapViewDirections
						origin={{
							latitude: origin?.latitude,
							longitude: origin?.longitude,
						}}
						destination={destination?.description}
						apikey={GOOGLE_MAPS_APIKEY}
						strokeWidth={3}
						strokeColor="black"
					/>
				)}

				{origin?.latitude && (
					<Marker
						coordinate={{
							latitude: origin?.latitude,
							longitude: origin?.longitude,
						}}
						title="Você"
						description={origin?.description}
						identifier="Você"
					/>
				)}

				{destination?.location && (
					<Marker
						coordinate={{
							latitude: destination?.location.lat,
							longitude: destination?.location.lng,
						}}
						title="Destino"
						description={destination?.description}
						identifier="Destino"
					/>
				 )}
			</MapView>
		</View>
	)
}

export default MapComponent;
