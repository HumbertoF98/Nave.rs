import React from 'react';
import { Link } from 'react-router-dom';
import logoNave from '../../assets/nave.svg';
import { Container, Content } from './styles';

export default function Header() {
  function handleSignOut() {
    localStorage.clear();
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoNave} alt="logoNave" />
        </nav>
        <Link to="/" onClick={handleSignOut} >
          Sair
        </Link>
      </Content>
    </Container>
  );

}