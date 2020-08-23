import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  SubHeader,
  DivRow
} from './styles';
import { useHistory } from 'react-router-dom';
import Input from "../../components/Input";
import Button from "../../components/Button";
import goBack from '../../assets/goBack.svg';
import ModalInfo from '../../components/ModalInfo';
//toast for user experiencie
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
//api
import api from '../../services/api';

export default function CreateNaver() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');
  const [adimissionDate, setAdmissionDate] = useState('');
  const [project, setProject] = useState('');
  const [urlPhoto, setUrlPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [AddEditNaver, setAddEditNaver] = useState('Adicionar Naver');

  // mask for date
  const maskDate = (value) => {
    const v = value.replace(/\D/g, "").slice(0, 10);
    if (v.length >= 5) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
    } else if (v.length >= 3) {
      return `${v.slice(0, 2)}/${v.slice(2)}`;
    }
    return v;
  };

  // aplying mask on variable age
  function handleDateAge(e) {
    setAge(maskDate(e.target.value));
  }

  function handleAdmissionDate(e) {
    setAdmissionDate(maskDate(e.target.value));
  }


  async function addNaver() {
    setLoading(true);
    if (!name || !age || !job || !adimissionDate || !project || !urlPhoto) {
      toast.error('Preencha todos os campos para adicionar um Naver!');
      setLoading(false);
    }
    else {
      try {
        const response = await api.post('navers', {
          name,
          job_role: job,
          birthdate: age,
          admission_date: adimissionDate,
          project,
          url: urlPhoto,
        }).then(function (response) {
          if (response.status === 200) {
            setIsModalVisible(true);
            setLoading(false);
          }
        })
      } catch (err) {
        toast.error('Desculpe, ocorreu um erro!');
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <Form>
        <SubHeader>
          <Link to='/inicio'>
            <img src={goBack} alt="imageGoBack" />
          </Link>
          <h2>{AddEditNaver}</h2>
        </SubHeader>
        <DivRow>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            label="Nome"
            placeholder="Nome"
          />
          <Input
            value={job}
            onChange={(e) => {
              setJob(e.target.value);
            }}
            label="Cargo"
            placeholder="Cargo"
          />
        </DivRow>
        <DivRow>
          <Input
            maxLength={10}
            value={age}
            onChange={handleDateAge}
            label="Data de nascimento"
            placeholder="Data de nascimento"
          />
          <Input
            maxLength={10}
            value={adimissionDate}
            onChange={handleAdmissionDate}
            label="Dia de admissão"
            placeholder="Dia de admissão"
          />
        </DivRow>
        <DivRow>
          <Input
            value={project}
            onChange={(e) => {
              setProject(e.target.value)
            }}
            label="Projetos que participou"
            placeholder="Projetos que participou"
          />
          <Input
            value={urlPhoto}
            onChange={(e) => {
              setUrlPhoto(e.target.value)
            }}
            label="URL da foto do Naver"
            placeholder="URL da foto do Naver"
          />
        </DivRow>
        {isModalVisible ? <ModalInfo onClose={() => setIsModalVisible(false)} /> : null}
        <Button loading={loading} onClick={addNaver}>Salvar</Button>
      </Form>
    </Container>
  );
}