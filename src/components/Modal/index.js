import React from 'react';
import {
  ModalContainer,
  DivContainer,
  Content,
  DivInfo,
  DivIcons,
  CloseButton
} from './styles';
// button for close
import Naver1 from '../../assets/Naver1.svg';
import closeButton from '../../assets/close.svg';
import Trash from '../../assets/trash.svg';
import Pencil from '../../assets/pencil.svg';
// library to manipulate dates
import moment from 'moment';

const Modal = ({ onClose = () => { }, children }) => {
  // get today
  var today = new Date().toJSON().slice(0, 10).toString();
  // get birthdate
  var age = moment(children.birthdate.slice(0, 10).toString());
  // difference between birthdate and today is the naver's age
  var calc = Math.abs(age.diff(today, 'years'));

  // get admission date
  var admissionDate = moment(children.admission_date.slice(0, 10).toString());
  // difference between the admission date and today is naver's company time
  var calcTimeAdmission = Math.abs(admissionDate.diff(today, 'months'));

  return (
    <ModalContainer>
      <DivContainer>
        <img src={children.url} alt="Naver" />
        <Content>
          <DivInfo>
            <h1>{children.name}</h1>
            <span>{children.job_role}</span>
            <h2>Idade</h2>
            <span>{calc} anos</span>
            <h2>Tempo de empresa</h2>
            <span>{calcTimeAdmission} meses</span>
            <h2>Projetos que participou</h2>
            <span>{children.project}</span>
          </DivInfo>
          <DivIcons>
            <img src={Trash} alt="Trash" />
            <img src={Pencil} alt="Pencil" />
          </DivIcons>
        </Content>
        <CloseButton onClick={onClose}>
          <img src={closeButton} alt="CloseButton" />
        </CloseButton>
      </DivContainer>
    </ModalContainer>
  );
}

export default Modal;