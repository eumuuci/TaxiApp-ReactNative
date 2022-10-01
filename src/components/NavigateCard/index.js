import React, {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {useDispatch} from 'react-redux';

import {setDestination} from '../../slices/navSlice';

import OptionsCard from '../OptionsCard';

import {
	Container,
	TitleContainer,
	TitleText,
	LineSeparator,
	Detail,
} from './styles';

const NavigateCard = () => {
	const dispatch = useDispatch();
	const [changeScreen, setChangeScreen] = useState(false);

	return (
		<Container>
			{changeScreen === false ? (
				<>
					<TitleContainer>
						<Detail />
						<TitleText>Boa viagem :)</TitleText>
					</TitleContainer>

					<LineSeparator />

					<GooglePlacesAutocomplete
						placeholder="Qual o seu destino?"
						styles={{
							container: {
								width: 380,
								paddingTop: 15,
							},
							textInput: {
								fontSize: 18,
								borderRadius: 0,
								backgroundColor: '#DDDDDF',
							},
						}}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details.geometry.location,
									description: data.description,
								}),
							);
							setChangeScreen(true);
							putDataInHistoric()
						}}
						fetchDetails={true}
						returnKeyType={'search'}
						enablePoweredByContainer={false}
						minLength={2}
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: 'pt-BR',
						}}
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
					/>
				</>
			) : (
				<>
					<OptionsCard />
				</>
			)}
		</Container>
	);
};

export default NavigateCard;
