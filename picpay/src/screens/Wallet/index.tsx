import React, { useState } from 'react';
import { Text, Switch } from 'react-native';
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddCardCredit,
  AddCardCreditLabel,
  UseTicket,
  UseTicketLabel,
} from './styles';

import creditCardImg from '../../images/credit-card.png';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

const Wallet: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility(): void {
    setIsVisible(state => !state);
  }

  function handleToggleUseBalance(): void {
    setUseBalance(state => !state);
  }

  return (
    <>
      <Wrapper>
        <FocusAwareStatusBar
          backgroundColor={useBalance ? '#52e78c' : '#d3d3d3'}
        />

        <Header
          colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}
        >
          <HeaderContainer>
            <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                <Text>R$ </Text>
                <Bold>{isVisible ? '15,80' : '----'}</Bold>
              </Value>

              <EyeButton onPress={handleToggleVisibility}>
                <Feather
                  name={isVisible ? 'eye' : 'eye-off'}
                  size={22}
                  color="#fff"
                />
              </EyeButton>
            </BalanceContainer>
            <Info>Seu saldo está rendendo 100% do CDI.</Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons
                  name="cash-multiple"
                  size={28}
                  color="#FFF"
                />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#FFF" />
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

          <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>Formas de Pagamento</PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>Cadastre seu cartão de crédito</CardTitle>

                <CardInfo>
                  Cadastre um cartão de crédito para poder fazer pagamentos
                  mesmo quando não tiver saldo no seu PicPay.
                </CardInfo>
              </CardDetails>

              <Img resizeMode="contain" source={creditCardImg} />
            </CardBody>

            <AddCardCredit>
              <AntDesign name="pluscircleo" color="#0db060" size={30} />
              <AddCardCreditLabel>
                Adicionar cartão de crédito
              </AddCardCreditLabel>
            </AddCardCredit>
          </Card>
        </PaymentMethods>

        <UseTicket>
          <MaterialCommunityIcons
            name="ticket-percent"
            size={20}
            color="#0db060"
          />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicket>
      </Wrapper>
    </>
  );
};

export default Wallet;
