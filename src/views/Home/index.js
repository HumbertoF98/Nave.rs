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
import ModalDeleteNaver from '../../components/ModalDeleteNaver';
//images
import Pencil from '../../assets/pencil.svg';
import Trash from '../../assets/trash.svg';
// history
import { useHistory } from 'react-router-dom';
// api
import api from '../../services/api';

export default function Home({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [navers, setNavers] = useState([]);
  const [data, setData] = useState('');
  const history = useHistory();

  // load Navers
  useEffect(() => {
    async function loadNavers() {
      try {
        await api.get('navers')
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

  // see modal to view the naver
  function seeModal(nav) {
    setData(nav);
    setIsModalVisible(true)
  }

  // see modal to delete a naver
  function seeModalDelete(id) {
    setData(id);
    setModalDelete(true)
  }

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
          <ViewOneNaver key={nav.id}>
            <img src={nav.url} alt="ImageNaver" onClick={() => seeModal(nav)} />
            {isModalVisible ?
              <Modal onClose={() => setIsModalVisible(false)}>
                {data}
              </Modal> : null}
            <h3>{nav.name.length > 20 ?
              nav.name.substring(0, 20, -3) + '...'
              :
              nav.name}</h3>
            <h4>{nav.job_role.length > 20 ?
              nav.job_role.substring(0, 20, -3) + '...'
              :
              nav.job_role}
            </h4>
            <ViewTrashAndPencil>
              <img src={Trash} alt="ImageNaver" onClick={() => seeModalDelete(nav.id)} />
              {modalDelete ? <ModalDeleteNaver onClose={() => setModalDelete(false)}>
                {data}
              </ModalDeleteNaver> : null}
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