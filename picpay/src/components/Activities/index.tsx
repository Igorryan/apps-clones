import React from 'react';
import { Text } from 'react-native';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Datails,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

// images
import avatar from '../../images/avatar.png';

const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você </Bold>
            <Text> pagou a </Text>
            <Bold>@maateusilva</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Matheus Silva</UserName>
        </CardBody>

        <CardFooter>
          <Datails>
            <Value>R$ 18,00</Value>
            <Divider />
            <Feather name="lock" size={14} color="rgba(255, 255, 255, 0.6)" />
            <Date>há 2 dias atrás</Date>
          </Datails>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="rgba(255, 255, 255, 0.6)"
                size={18}
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign
                name="hearto"
                color="rgba(255, 255, 255, 0.6)"
                size={18}
              />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
