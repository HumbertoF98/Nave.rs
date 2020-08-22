import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  SubHeader,
  DivRow
} from './styles';
import Input from "../../components/Input";
import Button from "../../components/Button";
import goBack from '../../assets/goBack.svg';

export default function CreateNaver() {
  return (
    <Container>
      <Form>
        <SubHeader>
          <Link to='/inicio'>
            <img src={goBack} alt="imageGoBack" />
          </Link>
          <h2>Adicionar Naver</h2>
        </SubHeader>
        <DivRow>
          <Input
            label="Nome"
            placeholder="Nome"
          />
          <Input
            label="Cargo"
            placeholder="Cargo"
          />
        </DivRow>
        <DivRow>
          <Input
            label="Idade"
            placeholder="Idade"
          />
          <Input
            label="Tempo de empresa"
            placeholder="Tempo de empresa"
          />
        </DivRow>
        <DivRow>
          <Input
            label="Projetos que participou"
            placeholder="Projetos que participou"
          />
          <Input
            label="URL da foto do Naver"
            placeholder="URL da foto do Naver"
          />
        </DivRow>
        <Button>Salvar</Button>
      </Form>
    </Container>
  );
}