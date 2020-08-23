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
export const DivContainer = styled.div`
background: #FFF;
display: flex;
flex-direction: row;
width: 1006px;
height: 503px;
@media(max-width: 1100px){
  width: 700px;
  height: 303px;
}
@media(max-width:768px){
  width: 500px;
}
img{
  width: 504.8px;
  height: 100%;
  align-self: flex-start;
  margin-left: -1px;
  @media(max-width: 1100px){
  width: 304.8px;
}
}
`;

export const Content = styled.div`
display: flex;
height: 100%;
flex-direction: column;
padding: 20px;
`;

export const DivInfo = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  width: 100%;
  h1{
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  @media(max-width:1100px){
    font-size: 16px;
    line-height: 24px;
  }
}
span{
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #212121;
  @media(max-width:1100px){
    font-size: 12px;
    line-height: 12px;
  }
}
h2{
  font-size: 16px;
  margin-top: 20px;
  line-height: 24px;
  font-weight: 600;
  @media(max-width:1100px){
    font-size: 12px;
    line-height: 12px;
  }
}
`;

export const DivIcons = styled.div`
flex-direction: row;
justify-content: space-between;
width: 25%;
align-self: flex-start;
height: 10%;
display:flex;
@media(max-width:1100px){
  margin-top: 20px;
  width: 30%;
}
@media(max-width:768px){
  width: 30%;
}
img{
  width: 14px;
  height: 18px;
}
`;

export const CloseButton = styled.div`
width: 14px;
height: 14px;
margin-top: 20px;
display: flex;
cursor: pointer;
margin-left: 235px;
@media(max-width: 1100px){
margin-left: 175px;
}
@media(max-width: 768px){
margin-left: -20px;
}
`;
