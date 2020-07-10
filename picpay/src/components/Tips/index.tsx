import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

interface IItem {
  title: string;
  img: ImageSourcePropType;
  color: string;
}

const items = [
  {
    title: 'Não fique sem falar com quem você precisa',
    img: img8,
    color: '#172c4a',
  },
  {
    title: 'Compre de quem está perto',
    img: img9,
    color: '#6a0159',
  },
  {
    title: 'Pague um amigo à distância',
    img: img10,
    color: '#4139c8',
  },
  {
    title: 'Divirta-se em casa',
    img: img11,
    color: '#00ab4b',
  },
  {
    title: 'Pague suas contas sem sair de casa',
    img: img12,
    color: '#ba2f76',
  },
] as IItem[];

const Tips: React.FC = () => {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.img.toString()} bgColor={item.color}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
