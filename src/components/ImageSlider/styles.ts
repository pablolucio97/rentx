import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: -64px;
`;
export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
  width: 12px;
  height: 12px;
  border-radius: 50px;
  margin: 4px;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;
