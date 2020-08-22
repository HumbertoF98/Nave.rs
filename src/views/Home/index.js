import React from 'react';
import {
  Container,
  SubHeader,
  ViewNavers,
  ViewOneNaver,
  ViewTrashAndPencil
} from './styles';
import Button from '../../components/Button';
import Naver1 from '../../assets/Naver1.svg';
import Pencil from '../../assets/pencil.svg';
import Trash from '../../assets/trash.svg';

export default function Home() {
  return (
    <Container>
      <SubHeader>
        <h1>Navers</h1>
        <Button>
          Adicionar Naver
        </Button>
      </SubHeader>
      <ViewNavers>
        <ViewOneNaver>
          <img src={Naver1} />
          <h3>Juliano Reis</h3>
          <h4>Front-end Developer</h4>
          <ViewTrashAndPencil>
            <img src={Trash} />
            <img src={Pencil} />
          </ViewTrashAndPencil>
        </ViewOneNaver>
        <ViewOneNaver>
          <img src={Naver1} />
          <h3>Juliano Reis</h3>
          <h4>Front-end Developer</h4>
          <ViewTrashAndPencil>
            <img src={Trash} />
            <img src={Pencil} />
          </ViewTrashAndPencil>
        </ViewOneNaver>
        <ViewOneNaver>
          <img src={Naver1} />
          <h3>Juliano Reis</h3>
          <h4>Front-end Developer</h4>
          <ViewTrashAndPencil>
            <img src={Trash} />
            <img src={Pencil} />
          </ViewTrashAndPencil>
        </ViewOneNaver>
        <ViewOneNaver>
          <img src={Naver1} />
          <h3>Juliano Reis</h3>
          <h4>Front-end Developer</h4>
          <ViewTrashAndPencil>
            <img src={Trash} />
            <img src={Pencil} />
          </ViewTrashAndPencil>
        </ViewOneNaver>
      </ViewNavers>

    </Container>

  );
}