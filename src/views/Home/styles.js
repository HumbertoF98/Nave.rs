import styled from 'styled-components';

export const Container = styled.div`
`;

export const SubHeader = styled.div`
margin: 30px 45px 30px 45px;
display: flex;
justify-content: space-between;
align-items: center;

h1{
  font-weight: 600;
  font-size: 40px;
  line-height: 46px;
}
button{
  width: 176px;
  height: 40px;
}
`;

export const ViewNavers = styled.div`
flex-direction: row;
height: 420px;
display: flex;
margin: 45px;
justify-content: space-between;
overflow: hidden;
`;

export const ViewOneNaver = styled.div`
height: 100%;
width: 281px;
flex-direction: column;
display: flex;
img{
  height: 66%;
  cursor: pointer;
  width: 100%;
}
h3{
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin-top: 10px;
  color: #212121;
}
h4{
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  color: #212121;
  margin-top: 10px;
}
`;

export const ViewTrashAndPencil = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
justify-content: space-between;
width: 15%;
img{
  width: 14px;
  height: 18px;
}
`;