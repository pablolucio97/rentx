import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  
`;

export const Header = styled.View`
  width: 100%;
  height: 320px;

  background-color: ${({ theme }) => theme.colors.header};
  
  justify-content: center;
  padding: 24px;
  padding-top: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(32)}px;
  `;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(16)}px;
  margin-top: 24px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 16px;
  `;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const AppointmentQuanitty = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const AppointmentTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
