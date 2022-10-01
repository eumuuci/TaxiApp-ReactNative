import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../../slices/navSlice';

import {
	Container,
	Header,
	HeaderTitle,
	CarCategory,
	CarImage,
	TravelInformation,
	CarType,
	TravelTime,
	TravelPrice,
	ChooseWrapper,
	ChooseUberButton,
	ChooseTitle,
 } from './styles';

import carIMG from '../../Assets/images/car.png';

const price_correction = 1.5

const OptionsCard = () => {
		const [select, setSelect] = useState(false);
		const travelTimeInfo = useSelector(selectTravelTimeInformation)
	return (
		<Container>
			<Header>
				<HeaderTitle>Escolha o veículo</HeaderTitle>
			</Header>

			<CarCategory
			style={{backgroundColor: select ?  "#e5e5e5" : "#FFFFFF"}}
			onPress={ () => setSelect(!select) }>
				<CarImage source={carIMG}/>

				<TravelInformation>
					<CarType>UberX</CarType>
					<TravelTime>{travelTimeInfo?.duration?.text} de corrida</TravelTime>
				</TravelInformation>

				<TravelPrice>
					{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
						(travelTimeInfo?.duration?.value * price_correction ) / 100
					)}
				</TravelPrice>
			</CarCategory>

			<ChooseWrapper>
				<ChooseUberButton
				disabled={select === false}
				style={{backgroundColor: select ?  "#000000" : "#e5e5e5"}}
				>
					<ChooseTitle>Seguir viajem</ChooseTitle>
				</ChooseUberButton>
			</ChooseWrapper>

		</Container>
	)
}

export default OptionsCard;
