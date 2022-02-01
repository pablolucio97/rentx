import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
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

export const RentalPeriod = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  margin: 32px 0;
  `;

export const DateInfo = styled.View`
  width: 30%;
  `;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(12)}px;
  `;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(12)}px;
  
  ${({ selected, theme }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.main};
      `};
      `;

export const Content = styled.ScrollView`
`;

export const Footer = styled.View`
  padding: 24px;
  flex: .25;
`;
