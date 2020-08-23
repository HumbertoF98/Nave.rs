import styled from 'styled-components';
import Button from '../../components/Button';

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

export const CancelButton = styled(Button)`
background: #FFF;
border: 1px solid #212121;
p {
  color: #212121;
}
`;

export const RowContainer = styled.div`
width: 592px;
background: #FFF;
height: 233px;
display: flex;
@media(max-width:1100px){
  width: 392px;
  height: 170px;
}
img {
  width: 14px;
  height: 14px;
}
`;


export const DivContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 40px;
@media(max-width: 1100px){
    padding: 15px;
  }
h1 {
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  @media(max-width: 1100px){
    text-align: center;
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
    text-align: center;
    font-size: 12px;
    line-height: 24px;
  }
}
`;

export const DivButtons = styled.div`
margin-top: 30px;
flex-direction: row;
display: flex;
align-self: flex-end;
@media(max-width: 1100px){
    align-self: center;
  }
button {
  width: 176px;
  margin-left: 20px;
  @media(max-width: 1100px){
    width: 120px;
  }
}
`;
