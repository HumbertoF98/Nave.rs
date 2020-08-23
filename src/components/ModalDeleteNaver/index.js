import React, { useState } from 'react';
import {
  ModalContainer,
  DivContainer,
  RowContainer,
  DivButtons,
  CancelButton
} from './styles';
import closeButton from '../../assets/close.svg';
//api
import api from '../../services/api';
// toast for user experience
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Button from '../Button';
import ModalInfo from '../../components/ModalInfo';
import { useHistory } from 'react-router-dom';

const ModalDeleteNaver = ({ onClose = () => { }, children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  async function deleteNaver() {
    setLoading(true);
    try {
      await api.delete(`navers/${children}`)
        .then(function (response) {
          setIsModalVisible(true);
          setLoading(false);
        })
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar deletar o usuário');
      setLoading(false);
    }
  }

  function closeModal() {
    onClose(false);
    setIsModalVisible(false)
    window.location.reload(true)
  }


  return (
    <ModalContainer>
      {isModalVisible ?
        <ModalInfo
          onClose={() => closeModal()}>
          Naver excluído com sucesso
       </ModalInfo>
        : null
      }
      <RowContainer>
        <DivContainer>
          <h1>Excluir Naver</h1>
          <span>Tem certeza que deseja excluir este Naver?</span>
          <DivButtons>
            <CancelButton
              onClick={onClose}>
              Cancelar</CancelButton>
            <Button loading={loading} onClick={() => deleteNaver()}>Excluir</Button>
          </DivButtons>
        </DivContainer>
      </RowContainer>
    </ModalContainer>
  );
}

export default ModalDeleteNaver;
