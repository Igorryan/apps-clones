import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Wrapper = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const BalanceContainer = styled.View`
  align-items: center;
`;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
`;
