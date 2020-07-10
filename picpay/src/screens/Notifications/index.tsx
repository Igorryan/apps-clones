import React from 'react';

import { StatusBar } from 'react-native';
import {
  Wrapper,
  Header,
  Title,
  ConfigLink,
  ConfigLinkLabel,
  NotificationContainer,
  Notification,
  NotificationMessage,
  NotificationDate,
  styles,
} from './styles';

interface INotification {
  id: string;
  message: string;
  time: string;
}

const notifications = [
  {
    id: '1',
    message:
      'Identificamos um novo acesso à sua conta. Toque aqui para saber mais.',
    time: 'Hoje às 13:59',
  },
  {
    id: '2',
    message:
      '@Gabriela acabou de fazer seu primeiro pagamento, deixe um comentário',
    time: '13 de mar às 10:25',
  },
  {
    id: '3',
    message:
      '#sextou com cashback absurdo! 😎 Compre o que quiser com cartão de crédito usando PicPay e ganhe 40% de volta',
    time: '6 de mar às 17:29',
  },
  {
    id: '4',
    message:
      'O documento para a Declaração de Imposto de Renda já foi enviado para o seu e-mail. Toque para saber mais!',
    time: '28 de fev às 11:32',
  },
  {
    id: '5',
    message:
      '🔥🔥🔥 Sextou demais! 🔥🔥🔥 Cashback de 40% pagando qualquer coisa com PicPay. Toque e saiba mais',
    time: '19 de fev às 19:32',
  },
  {
    id: '6',
    message:
      'Identificamos um novo acesso à sua conta. Toque aqui para saber mais.',
    time: 'Hoje às 13:59',
  },
  {
    id: '7',
    message:
      '@Gabriela acabou de fazer seu primeiro pagamento, deixe um comentário',
    time: '13 de mar às 10:25',
  },
  {
    id: '8',
    message:
      '#sextou com cashback absurdo! 😎 Compre o que quiser com cartão de crédito usando PicPay e ganhe 40% de volta',
    time: '6 de mar às 17:29',
  },
  {
    id: '9',
    message:
      'O documento para a Declaração de Imposto de Renda já foi enviado para o seu e-mail. Toque para saber mais!',
    time: '28 de fev às 11:32',
  },
  {
    id: '10',
    message:
      'Sextou demais! 🔥 Cashback de 40% pagando qualquer coisa com PicPay. Toque e saiba mais',
    time: '19 de fev às 19:32',
  },
] as INotification[];

const Notifications: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Notificações</Title>
        <ConfigLink>
          <ConfigLinkLabel>Configurar</ConfigLinkLabel>
        </ConfigLink>
      </Header>

      <NotificationContainer>
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            activeOpacity={0.8}
            style={styles.notification}
          >
            <NotificationMessage>{notification.message}</NotificationMessage>

            <NotificationDate>{notification.time}</NotificationDate>
          </Notification>
        ))}
      </NotificationContainer>
    </Wrapper>
  );
};

export default Notifications;
