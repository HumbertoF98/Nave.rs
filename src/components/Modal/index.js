import React from 'react';
import {
  ModalContainer,
  DivContainer,
  Content,
  DivInfo,
  DivIcons
} from './styles';
// button for close
import Naver1 from '../../assets/Naver1.svg';
import closeButton from '../../assets/close.svg';
import Trash from '../../assets/trash.svg';
import Pencil from '../../assets/pencil.svg';

const Modal = ({ children }) => {
  return (
    <ModalContainer>
      <DivContainer>
        <img src={Naver1} alt="closeButton" />
        <Content>
          <DivInfo>
            <h1>Juliano Reis</h1>
            <span>Front-end Developer</span>
            <h2>Idade</h2>
            <span>24</span>
            <h2>Tempo de empresa</h2>
            <span>2 anos</span>
            <h2>Projetos que participou</h2>
            <span>Lorem ipsum</span>
          </DivInfo>
          <DivIcons>
            <img src={Trash} alt="Trash" />
            <img src={Pencil} alt="Pencil" />
          </DivIcons>
        </Content>
      </DivContainer>
    </ModalContainer>
  );
}

export default Modal;