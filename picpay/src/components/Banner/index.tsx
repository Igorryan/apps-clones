import React from 'react';

import { Container, Details, Img, Title, Description, Link } from './styles';

import img13 from '../../images/13.png';

const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas
          cobranças.
        </Description>

        <Link>Cobrar agora</Link>
      </Details>

      <Img source={img13} />
    </Container>
  );
};

export default Banner;
