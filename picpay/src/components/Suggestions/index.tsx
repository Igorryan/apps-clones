import React from 'react';

import { ImageSourcePropType } from 'react-native';
import { Container, Option, Img, Label } from './styles';

// images
import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

interface IItem {
  img: ImageSourcePropType;
  label: string;
}

const items = [
  {
    img: img1,
    label: 'Recarga',
  },
  {
    img: img2,
    label: 'Uber',
  },
  {
    img: img3,
    label: 'Ônibus',
  },
  {
    img: img4,
    label: 'TV',
  },
  {
    img: img5,
    label: 'Doações',
  },
  {
    img: img6,
    label: 'Cod. Barras',
  },
  {
    img: img7,
    label: 'Faq',
  },
] as IItem[];

const Suggestions: React.FC = () => {
  return (
    <Container showsHorizontalScrollIndicator={false} horizontal>
      {items.map(item => (
        <Option key={item.label}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
};

export default Suggestions;
