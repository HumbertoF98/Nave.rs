import React, { useState, useEffect } from 'react';
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
import ModalDeleteNaver from '../../components/ModalDeleteNaver';
//images
import Pencil from '../../assets/pencil.svg';
import Trash from '../../assets/trash.svg';
// history
import { useHistory } from 'react-router-dom';
// api
import api from '../../services/api';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalInfoVisible, setIsModalInfoVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [navers, setNavers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadNavers() {
      try {
        const response = await api.get('navers')
          .then(function (response) {
            if (response.status === 200) {
              setNavers(response.data);
            }
          })
      } catch (err) {
        setNavers([]);
      }
    }
    loadNavers();
  }, []);

  return (
    <Container>
      <SubHeader>
        <h1>Navers</h1>
        <Button onClick={() => history.push('/adicionar-naver')}>
          Adicionar Naver
        </Button>
      </SubHeader>
      <ViewNavers>
        {navers.map(nav => (
          <ViewOneNaver>
            <img src={nav.url} alt="ImageNaver" onClick={() => setIsModalVisible(true)} />
            {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
            <h3>{nav.name}</h3>
            <h4>{nav.job_role}</h4>
            <ViewTrashAndPencil>
              <img src={Trash} alt="ImageNaver" onClick={() => setModalDelete(true)} />
              {modalDelete ? <ModalDeleteNaver onClose={() => setModalDelete(false)} /> : null}
              <img src={Pencil} alt="ImageNaver" onClick={() => history.push({
                pathname: '/adicionar-naver',
                state: { detail: nav }
              })} />
            </ViewTrashAndPencil>
          </ViewOneNaver>
        ))}
      </ViewNavers>
    </Container>

  );
}