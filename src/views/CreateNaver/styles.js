import styled from 'styled-components';

export const Container = styled.div`
justify-content: center;
align-items: center;
display: flex;
`;

export const SubHeader = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
flex-direction: row;
h2{
  line-height: 36px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: 600;
  align-self: flex-start;
  text-align: left;
}
`;
export const Form = styled.div`
margin: 30px 45px 30px 45px;
display: flex;
flex-direction: column;
button{
  align-self: flex-end;
  width: 176px;
  margin-top: 30px;
}

@media(max-width:768px){
  button{
    align-self: center;
    margin-left: 20px;
  }
}
`;

export const DivRow = styled.div`
flex-direction: row;
display: flex;
margin-top: 30px;
input {
  margin-left: 20px;
  width: 280px;
}
label{
  margin-left: 20px;
}
@media(max-width: 768px){
  flex-direction: column;
  padding-top: 10px;
  margin-top: 5px;

  input{
    margin-top: 15px;
  }
  label{
    display: none;
  }
}
`;
