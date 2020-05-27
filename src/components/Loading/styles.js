import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Load = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#333',
})``;
