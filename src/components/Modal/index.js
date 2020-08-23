import React, { useState } from 'react';
import {
  ModalContainer,
  DivContainer,
  Content,
  DivInfo,
  DivIcons,
  CloseButton
} from './styles';
// button for close
import { useHistory } from 'react-router-dom';
import closeButton from '../../assets/close.svg';
import Trash from '../../assets/trash.svg';
import Pencil from '../../assets/pencil.svg';
import ModalDeleteNaver from '../../components/ModalDeleteNaver';
// library to manipulate dates
import moment from 'moment';

const Modal = ({ onClose = () => { }, children }) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [data, setData] = useState('');
  const history = useHistory();
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

  function seeModalDelete(id) {
    setData(id);
    setModalDelete(true)
  }

  return (
    <ModalContainer>
      <DivContainer>
        <img src={children.url} alt="Naver" />
        <Content>
          <DivInfo>
            <h1>{children.name.length > 20 ?
              children.name.substring(0, 20, -3) + '...'
              :
              children.name}
            </h1>
            <span>{children.job_role}</span>
            <h2>Idade</h2>
            <span>{calc} anos</span>
            <h2>Tempo de empresa</h2>
            <span>{calcTimeAdmission} meses</span>
            <h2>Projetos que participou</h2>
            <span>{children.project.length > 40 ?
              children.project.substring(0, 40, -3) + '...'
              :
              children.project}
            </span>
          </DivInfo>
          <DivIcons>
            <img src={Trash} alt="Trash" onClick={() => seeModalDelete(children.id)} />
            {modalDelete ? <ModalDeleteNaver onClose={() => setModalDelete(false)}>
              {data}
            </ModalDeleteNaver> : null}
            <img src={Pencil} alt="Pencil" onClick={() => history.push({
              pathname: '/adicionar-naver',
              state: { detail: children }
            })} />
          </DivIcons>
          <CloseButton onClick={onClose}>
            <img src={closeButton} alt="CloseButton" />
          </CloseButton>
        </Content>
      </DivContainer>
    </ModalContainer>
  );
}

export default Modal;