import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
height: 85px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
nav { 
  display:flex;
  align-items: center;
  img { 
    height: 48px;
    width: 148px;
    margin-left: 30px;
  }
}
a { 
    font-weight: 600;
    color: #000;
    margin-right: 30px;
  }
`;
