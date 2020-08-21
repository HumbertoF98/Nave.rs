import styled from 'styled-components';

export const Container = styled.button`
flex-direction: row;
width: 384px;
height: 40px;
background: #212121;
align-items: center;
align-self: center;
justify-content: center;
border:0;
@media(max-width:768px){
  width: 284px;
}
`;

export const Text = styled.p`
color: #FFFFFF;
font-style: normal;
font-weight: 600;
font-size: 14px;
text-align: center;
`;