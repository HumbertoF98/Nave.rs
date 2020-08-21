import styled from 'styled-components';

export const Container = styled.div`
justify-content: center;
align-items: center;
display: flex;
`;

export const ContainerBorder = styled.div`
width: 448px;
height: 408px;
border: 1px solid #212121;
box-sizing: border-box;
justify-content: space-evenly;
flex-direction: column;
display: flex;
@media(max-width: 768px){
  width: 348px;
}
`;

export const LogoImg = styled.img`
align-self: center;
`;