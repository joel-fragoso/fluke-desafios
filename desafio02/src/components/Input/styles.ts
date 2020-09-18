import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  background-color: #141414;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #141414;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #cc3366;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #33cc66;
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
`;
