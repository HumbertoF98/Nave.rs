import React from 'react';
import {
  ModalContainer,
  DivContainer,
  RowContainer,
  CloseButton
} from './styles';
import closeButton from '../../assets/close.svg';

const ModalInfo = ({ onClose = () => { }, children }) => {
  return (
    <ModalContainer>
      <RowContainer>
        <DivContainer>
          <h1>Naver excluído</h1>
          <span>Naver excluído com sucesso</span>
        </DivContainer>
        <CloseButton onClick={onClose}>
          <img src={closeButton} alt="CloseButton" />
        </CloseButton>
      </RowContainer>
    </ModalContainer>
  );
}

export default ModalInfo;
