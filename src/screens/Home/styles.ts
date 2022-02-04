import { RFValue } from "react-native-responsive-fontsize";
import {FlatList, FlatListProps} from 'react-native'
import styled from "styled-components/native";
import { CarProps } from "../../types/cars";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  `;

export const Header = styled.View`
  width: 100%;
  height: 112px;
  
  justify-content: flex-end;
  
  background-color: ${({ theme }) => theme.colors.shape_dark};
  
  `;

export const HeaderContent = styled.View`
  width: 100%;
  height: 112px;
  padding: 32px 24px;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${({ theme }) => theme.colors.shape_dark};
  `;

export const TotalCars = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  `;

export const CarList = styled(FlatList as new (props : FlatListProps<CarProps>) => FlatList<CarProps>)`
  padding: 24px 40px 24px 12px;
  `

export const MyCarButtons = styled.TouchableOpacity.attrs({
  activeOpacity: .8
})`
  width: 56px;
  height: 56px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 12px;
  right: 12px;
`
