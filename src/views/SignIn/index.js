import React from 'react';
import logoNave from '../../assets/nave.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Container,
  ContainerBorder,
  LogoImg
} from './styles';

export default function SignIn() {
  return (
    <Container>
      <ContainerBorder>
        <LogoImg
          src={logoNave} alt="LogoNave"
        />
        <Input
          label="E-mail"
          placeholder="E-mail"
        />
        <Input
          label="Senha"
          placeholder="Senha"
        />
        <Button>Entrar</Button>
      </ContainerBorder>
    </Container>

  );
}