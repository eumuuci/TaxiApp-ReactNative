import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;
export const Box = styled.TouchableOpacity.attrs({activeOpacity:0.8})`
	width: 115px;
	height: 100px;
	border-radius: 15px;
	align-items: center;
	justify-content: flex-end;
	padding: 10px;

	background: #e5e5e5;
`;
export const BoxTitle = styled.Text`
	font-size: 18px;
	font-family: UberMedium;

	color: #222222;
`;
export const BoxImage = styled.Image`
	width: 70px;
	height: 70px;
`;

