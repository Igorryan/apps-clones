import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

// styled-components;
import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  ContainerIcons,
} from './styles';

// components
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

        <BalanceContainer>
          <BalanceTitle>Meu saldo</BalanceTitle>
          <Balance>R$ 15,80</Balance>
        </BalanceContainer>

        <ContainerIcons>
          <AntDesign name="gift" size={30} color="#10c86e" />
        </ContainerIcons>
      </Header>
      <Container>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
};

export default Home;
