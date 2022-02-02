import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.shape_dark};
  margin-top: 40px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;
