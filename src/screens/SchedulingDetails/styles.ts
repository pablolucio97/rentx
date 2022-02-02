import {
    getBottomSpace,
    getStatusBarHeight,
  } from "react-native-iphone-x-helper";
  import { RFValue } from "react-native-responsive-fontsize";
  import styled from "styled-components/native";
  
  export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
  `;
  export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
  `;
  
  export const CarImages = styled.View`
    margin-top: ${getStatusBarHeight() + 12}px;
  `;
  
  export const Content = styled.ScrollView`
    margin-top: ${getStatusBarHeight() + 12}px;
  `;
  
  export const Details = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 38px;
  `;
  
  export const Description = styled.View``;
  
  export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;
  `;
  
  export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.title};
  `;
  
  export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.main};
  `;
  
  export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
  `;
  
  export const Rent = styled.View``;
  
  export const Acessories = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 8px;
  `;
  export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 24px;
    padding-bottom: ${getBottomSpace() + 24}px;
  `;
  
  export const RentalPeriod = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom-width: 0.8px;
    border-bottom-color: ${({ theme }) => theme.colors.text};
  `;
  
  export const DateTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
  `;
  
  export const DateValue = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    color: ${({ theme }) => theme.colors.text_detail};
  `;
  
  export const DateInfo = styled.View``;
  
  export const CalenderIconContainer = styled.View`
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.main};
  `;
  
  export const RentalPrice = styled.View`
    width: 100%;
    margin-top: 16px;
  `;
  
  export const RentalPriceLabel = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_detail};
  `;
  
  export const RentalPriceDetails = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  `;
  
  export const RentalPriceQuota = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
  `;
  
  export const RentalPriceTotal = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.success};
  `;