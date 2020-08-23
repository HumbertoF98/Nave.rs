import styled from 'styled-components';

export const Container = styled.div`
`;

export const SubHeader = styled.div`
margin: 30px 65px 30px 65px;
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;

@media(max-width: 768px){
  flex-direction: column;
  justify-content: center;
}

h1{
  font-weight: 600;
  font-size: 40px;
  line-height: 46px;
}
button{
  width: 176px;
  height: 40px;
  @media(max-width: 768px){
    margin-top: 20px;
  }
}
`;

export const ViewNavers = styled.div`
flex-direction: row;
height: 420px;
display: flex;
margin: 45px;
@media(max-width: 768px){
  flex-direction: column;
  align-items: center;
  margin: 0;
}
`;

export const ViewOneNaver = styled.div`
height: 100%;
width: 281px;
flex-direction: column;
margin: 15px;
display: flex;
img{
  cursor: pointer;
  width: 100%;
  margin-left: 8px;
}
h3{
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin-top: 10px;
  color: #212121;
  margin-left: 8px;
}
h4{
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  color: #212121;
  margin-top: 10px;
  margin-left: 8px;
}
`;

export const ViewTrashAndPencil = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
img{
  width: 14px;
  margin: 8px;
  height: 18px;
}
`;