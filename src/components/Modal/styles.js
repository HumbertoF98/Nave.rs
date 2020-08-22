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
color: #000;
img {
  width: 504.8px;
  height: 100%;
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
  h1{
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
}
span{
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #212121;
}
h2{
  font-size: 16px;
  margin-top: 20px;
  line-height: 24px;
  font-weight: 600;
}
`;

export const DivIcons = styled.div`
flex-direction: row;
justify-content: space-between;
width: 20%;
align-self: flex-start;
height: 10%;
display:flex;
img{
  width: 14px;
  height: 18px;
}
`;
