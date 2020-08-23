import React from 'react';
import { Link } from 'react-router-dom';
import logoNave from '../../assets/nave.svg';
import { Container, Content } from './styles';
import { logout } from '../../services/auth';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoNave} alt="logoNave" />
        </nav>
        <Link to="/" onClick={logout} >
          Sair
        </Link>
      </Content>
    </Container>
  );

}