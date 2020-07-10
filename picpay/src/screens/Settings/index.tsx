import React from 'react';

import {
  Wrapper,
  Header,
  Title,
  AjudaLink,
  AjudaLinkLabel,
  HeaderInfo,
  Img,
  IG,
  Name,
  Text,
  Link,
  Options,
  OptionTitle,
  Option,
  OptionDescription,
  OptionsArrow,
  styles,
} from './styles';

import fotoPerfil from '../../images/igor.jpg';

const Settings: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Ajustes</Title>

        <AjudaLink>
          <AjudaLinkLabel>Ajuda</AjudaLinkLabel>
        </AjudaLink>
      </Header>
      <HeaderInfo>
        <Img fadeDuration={0} resizeMode="contain" source={fotoPerfil} />
        <IG>@igorryan</IG>
        <Name>Igor Ryan</Name>
        <Link>
          <Text>Ver meu perfil</Text>
        </Link>
      </HeaderInfo>

      <Options>
        <OptionTitle>Minha conta</OptionTitle>
        <Option activeOpacity={0.9} style={styles.option}>
          <OptionDescription>Meu PicPay</OptionDescription>
        </Option>
        <Option activeOpacity={0.9} style={styles.option}>
          <OptionDescription>Meu número</OptionDescription>
        </Option>
        <Option activeOpacity={0.9} style={styles.option}>
          <OptionDescription>Meu email</OptionDescription>
        </Option>
        <Option activeOpacity={0.9} style={styles.option}>
          <OptionDescription>Dados pessoais</OptionDescription>
        </Option>
        <Option activeOpacity={0.9} style={styles.option}>
          <OptionDescription>Conta bancária</OptionDescription>
        </Option>
        <Option activeOpacity={0.9} style={styles.option}>
          <OptionDescription>Taxas e limites</OptionDescription>
        </Option>
      </Options>
    </Wrapper>
  );
};

export default Settings;
