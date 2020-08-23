import styled from 'styled-components';

export const ModalContainer = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: 10;
background:rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
`;

export const RowContainer = styled.div`
width: 592px;
background: #FFF;
height: 160px;
display: flex;
flex-direction: row;
@media(max-width:1100px){
  width: 392px;
}
img {
  width: 14px;
  height: 14px;
}
`;


export const DivContainer = styled.div`
width: 90%;
display: flex;
flex-direction: column;
padding: 40px;
@media(max-width: 1100px){
  padding: 10px;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  @media(max-width: 1100px){
  font-size: 16px;
  line-height: 24px;
}
}
span {
  margin-top: 20px;
  font-size: 16px;
  line-height: 36px;
  font-weight: 400;
  @media(max-width: 1100px){
  font-size: 12px;
  line-height: 24px;
}
}
`;

export const CloseButton = styled.div`
width: 10%;
display: flex;
flex-direction: row;
img {
  width: 14px;
  cursor:pointer;
  height: 14px;
  margin-top: 20px;
  margin-left: 20px;
  @media(max-width:1100px){
  margin-left: 5px;
}
}
`;