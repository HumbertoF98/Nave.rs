import styled from 'styled-components';


export const Container = styled.div`
flex-direction: column;
display: flex;
label{
  text-align: left;
  margin-bottom: 5px;
  margin-left: 32px;
  color:#212121;
  font-weight: 600;
}
`;

export const TInput = styled.input.attrs({
  placeholderTextColor: '#9E9E9E',
})`
  font-size: 18px;
  align-self: center;
  width: 384px;
  height: 40px;
  border: 1px solid #424242;
  padding-left: 10px;
  background: transparent;
  @media(max-width: 768px){
    width: 284px;
  }
`;