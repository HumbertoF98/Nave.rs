import React, { useState } from 'react';
import logoNave from '../../assets/nave.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Container,
  ContainerBorder,
  LogoImg
} from './styles';
//toast for user experiencie
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// intercepts request for login
import { login } from '../../services/auth';
// navigation
import { useHistory } from 'react-router-dom';
//api
import api from '../../services/api';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // function to submit login
  async function handleLogin() {
    setLoading(true);
    if (!email || !password) {
      toast.error('Preencha e-mail e senha para continuar!');
      setLoading(false);
    }
    else {
      try {
        await api.post('/users/login', {
          email,
          password,
        }).then(function (response) {
          if (response.data.token) {
            setLoading(false);
            login(response.data.token);
            history.push('/inicio');
          }
        })
      } catch (err) {
        console.log(err.response)
        if (err.response.data.errorCode === 401) {
          toast.error('E-mail e/ou senha incorretos!');
          setLoading(false);
          localStorage.clear();
        }
        else {
          toast.error('Desculpe, ocorreu um erro!');
          setLoading(false);
          localStorage.clear();
        }
      }
    }
  }

  return (
    <Container>
      <ContainerBorder>
        <LogoImg
          src={logoNave} alt="LogoNave"
        />
        <Input
          value={email}
          label="E-mail"
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="E-mail"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          label="Senha"
          placeholder="Senha"
        />
        <Button loading={loading} onClick={handleLogin}>Entrar</Button>
      </ContainerBorder>
    </Container>

  );
}