import React from 'react';
import {
  ModalContainer,
  DivContainer,
  RowContainer,
  DivButtons,
  CancelButton
} from './styles';
import closeButton from '../../assets/close.svg';
import Button from '../Button';

const ModalDeleteNaver = ({ onClose = () => { }, children }) => {
  return (
    <ModalContainer>
      <RowContainer>
        <DivContainer>
          <h1>Excluir Naver</h1>
          <span>Tem certeza que deseja excluir este Naver?</span>
          <DivButtons>
            <CancelButton
              onClick={onClose}>
              Cancelar</CancelButton>
            <Button>Excluir</Button>
          </DivButtons>
        </DivContainer>
      </RowContainer>
    </ModalContainer>
  );
}

export default ModalDeleteNaver;
