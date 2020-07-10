import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 250px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: -10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 40px;
  color: #fff;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 40px;
  border-radius: 25px;
  justify-content: center;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #1c1c1e;
  height: 50px;

  padding: 0 16px;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  margin-left: 5px;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 15px;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddCardCredit = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const AddCardCreditLabel = styled.Text`
  color: #1ab563;
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;
`;

export const UseTicket = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const UseTicketLabel = styled.Text`
  color: #1ab563;
  margin-left: 10px;
  font-size: 16px;
  text-decoration-line: underline;
`;
