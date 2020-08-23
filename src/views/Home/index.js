import React, { useState } from 'react';
import {
  Container,
  SubHeader,
  ViewNavers,
  ViewOneNaver,
  ViewTrashAndPencil
} from './styles';
// components
import Button from '../../components/Button';
// modal
import Modal from '../../components/Modal';
import ModalInfo from '../../components/ModalInfo';
//images
import Naver1 from '../../assets/Naver1.svg';
import Pencil from '../../assets/pencil.svg';
import Trash from '../../assets/trash.svg';
// history
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalInfoVisible, setIsModalInfoVisible] = useState(false);

  const history = useHistory();
  return (
    <Container>
      <SubHeader>
        <h1>Navers</h1>
        <Button onClick={() => history.push('/adicionar-naver')}>
          Adicionar Naver
        </Button>
      </SubHeader>
      <ViewNavers>
        <ViewOneNaver>
          <img src={Naver1} alt="ImageNaver" onClick={() => setIsModalVisible(true)} />
          {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
          <h3>Juliano Reis</h3>
          <h4>Front-end Developer</h4>
          <ViewTrashAndPencil>
            <img src={Trash} alt="ImageNaver" />
            <img src={Pencil} alt="ImageNaver" />
          </ViewTrashAndPencil>
        </ViewOneNaver>
        <ViewOneNaver>
          <img src={Naver1} alt="ImageNaver" onClick={() => setIsModalInfoVisible(true)} />
          {isModalInfoVisible ? <ModalInfo onClose={() => setIsModalInfoVisible(false)} /> : null}
          <h3>Juliano Reis</h3>
          <h4>Front-end Developer</h4>
          <ViewTrashAndPencil>
            <img src={Trash} alt="ImageNaver" />
            <img src={Pencil} alt="ImageNaver" />
          </ViewTrashAndPencil>
        </ViewOneNaver>
        <ViewOneNaver>
          <img src={Naver1} alt="ImageNaver" />
          <h3>Juliano Reis</h3>
          <h4>Front-end Developer</h4>
          <ViewTrashAndPencil>
            <img src={Trash} alt="ImageNaver" />
            <img src={Pencil} alt="ImageNaver" />
          </ViewTrashAndPencil>
        </ViewOneNaver>
        <ViewOneNaver>
          <img src={Naver1} alt="ImageNaver" />
          <h3>Juliano Reis</h3>
          <h4>Front-end Developer</h4>
          <ViewTrashAndPencil>
            <img src={Trash} alt="ImageNaver" />
            <img src={Pencil} alt="ImageNaver" />
          </ViewTrashAndPencil>
        </ViewOneNaver>
      </ViewNavers>

    </Container>

  );
}