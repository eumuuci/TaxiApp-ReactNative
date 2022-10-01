import styled from 'styled-components'

export const Container = styled.SafeAreaView`
flex: 1;
background: #FFFFFF;
padding: 45px 15px;

`;
export const UserHeader = styled.View`
width: 100%;
margin-bottom: 30px;
`;
export const Greetings = styled.Text`
font-size: 28px;
font-family: UberBold;

color: #222222;
`;
export const Username = styled.Text`
font-size: 18px;
bottom: 5px;
font-family: Condensed;
color: #919191;
`;
export const SearchBar = styled.TouchableOpacity.attrs({activeOpacity:0.8})`
width: 100%;
height: 70px;
margin-top: 25px;
border-radius: 35px;
margin-bottom: 20px;
flex-direction: row;
align-items: center;
padding-left: 30px;

background: #e5e5e5;
`;
export const SearchBarText = styled.Text`
font-size: 22px;
font-family: UberMedium;
left: 10px;
`;
export const Separator = styled.View`
width: 1px;
height: 50px;
left: 30px;

background: #222222;
opacity: .1;
`;
export const RecentTravellsButton = styled.View`
width: 150px;
height: 48px;
border-radius: 75px;
padding-left: 10px;
left: 50px;
flex-direction: row;
align-items: center;

background: #FFFFFF;
`;
export const RecentTravellsText = styled.Text`
font-size: 20px;
font-family: UberMedium;
left: 10px;

color: #222222;
`;

export const FavoritesView = styled.View`
width: 100%;
margin-bottom: 15px;
`;

export const ItemTile = styled.Text`
font-size: 24px;
font-family: UberMedium;
margin-bottom: 20px;

color: #222222;
`;
export const Map = styled.View`
width: 100%;
height: 220px;
`;



