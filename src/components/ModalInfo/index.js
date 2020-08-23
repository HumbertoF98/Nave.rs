import React, { useState } from 'react';
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
          <h1>{children}</h1>
          <span>{children}</span>
        </DivContainer>
        <CloseButton onClick={onClose}>
          <img src={closeButton} alt="CloseButton" />
        </CloseButton>
      </RowContainer>
    </ModalContainer>
  );
}

export default ModalInfo;
