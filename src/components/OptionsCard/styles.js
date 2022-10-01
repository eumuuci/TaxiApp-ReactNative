import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: 400px;

	background: #FFFFFF;
`;

export const Header = styled.View`
	width: 100%;
	padding: 10px;

	align-items: center;
	margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
	font-size: 24px;
	font-family: UberMedium;

	color: #222222;
`;

export const CarCategory = styled.TouchableOpacity.attrs({
	activeOpacity: .8
})`
	width: 100%;
	flex-direction: row;
	align-items: center;
	padding: 0 10px;
`;

export const CarImage= styled.Image`
	width: 80px;
	height: 80px;
`;

export const TravelInformation = styled.View`
	margin-left: 15px;
`;

export const CarType = styled.Text`
	font-size: 18px;
	font-family: UberBold;

	color: #222222;
`;

export const TravelTime = styled.Text`
	font-size: 14px;
	font-family: Condensed;

	color: #222222;
`;

export const TravelPrice = styled.Text`
	font-size: 22px;
	font-family: UberMedium;
	position: absolute;
	right: 10px;

	color: #222222;
`;

export const ChooseWrapper = styled.View`
	flex: 1;

	align-items: center;
	justify-content: center;
`;

export const ChooseUberButton = styled.TouchableOpacity.attrs({
	activeOpacity: .8
})`
	width: 90%;
	height: 60px;
	align-items: center;
	justify-content: center;

	background: #000000;
`;

export const ChooseTitle = styled.Text`
	font-size: 18px;
	font-family: UberMedium;

	color: #FFFFFFFF;
`;

