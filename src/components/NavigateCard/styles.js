import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	width: 100%;
	height: 400px;
	background: #FFFFFF;

	align-items: center;
	justify-content: center;
`;

export const Detail = styled.View`
	width: 75px;
	height: 5px;
	border-radius: 37px;
	bottom: 10px;

	background: #DDDDDF;
`;

export const TitleContainer = styled.View`
	width: 100%;
	height: 70px;
	align-items: center;
	padding-top: 20px;
	background-color: #FFF;
`;

export const TitleText = styled.Text`
	font-size: 24px;
	font-family: UberMedium;

	color: #222222;
`;

export const LineSeparator = styled.View`
	width: 100%;
	height: 1px;

	background: #DDDDDF;
`;

export const FavoritesView = styled.View`
width: 100%;
bottom: 100px;
margin-left: 30px;
`;
