import React from 'react';

import {
Container,
Box,
BoxTitle,
BoxImage
} from './styles';

import CarIMG from "../../Assets/images/car.png";
import BoxIMG from "../../Assets/images/box.png";
import MarketIMG from "../../Assets/images/market.png";

const EventBox = () => {
		const boxInfo = [
			{name:"Viagem", img: CarIMG},
			{name:"Envios", img: BoxIMG},
			{name:"Mercado", img: MarketIMG}
		]
	return (
		<Container>
			{
			boxInfo.map((data) => {
				return(
					<Box key={data?.name}>
						<BoxImage source={data?.img}/>
						<BoxTitle>{data?.name}</BoxTitle>
					</Box>
				)
			})
			}
		</Container>
	)
}

export default EventBox;
