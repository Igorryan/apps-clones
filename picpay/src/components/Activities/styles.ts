import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Datails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 12px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 1px;
  height: 13px;
  background: rgba(255, 255, 255, 0.4);
  margin: 0 10px;
`;

export const Date = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  margin-left: 7px;
  font-size: 12px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const OptionLabel = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-left: 7px;
`;
