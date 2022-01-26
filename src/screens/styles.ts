import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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
