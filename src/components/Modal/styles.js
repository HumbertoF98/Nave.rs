import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
export const DivContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  width: 1006px;
  height: 503px;
  @media (max-width: 1100px) {
    width: 700px;
    height: 303px;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 180px;
  }
  img {
    width: 504.8px;
    height: 100%;
    align-self: flex-start;
    margin-left: -1px;
    @media (max-width: 1100px) {
      width: 304.8px;
    }
    @media (max-width: 768px) {
      width: 145px;
      height: 180px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 5px;
    justify-content: space-between;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-top: 5px;
  }
  h1 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    @media (max-width: 1100px) {
      font-size: 16px;
      line-height: 24px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  span {
    margin-top: 10px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #212121;
    @media (max-width: 1100px) {
      font-size: 12px;
      line-height: 12px;
      margin-top: 5px;
    }
    @media (max-width: 768px) {
      font-size: 8px;
      line-height: 8px;
    }
  }
  h2 {
    font-size: 16px;
    margin-top: 20px;
    line-height: 24px;
    font-weight: 600;
    @media (max-width: 1100px) {
      font-size: 12px;
      line-height: 12px;
    }
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
`;

export const DivIcons = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 10%;
  height: 10%;
  display: flex;
  margin-top: 30px;
  @media (max-width: 1100px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    width: 20%;
    margin-top: -30px;
  }
  img {
    width: 14px;
    height: 18px;
  }
`;

export const CloseButton = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  cursor: pointer;
  align-self: flex-end;
  position: absolute;
  @media (max-width: 768px) {
    img {
      width: 8px;
      height: 8px;
      margin-top: 5px;
    }
  }
`;

/* width: 14px;
height: 14px;
margin-top: 20px;
display: flex;
cursor: pointer;
margin-left: 235px;
@media(max-width: 1100px){
margin-left: 175px;
}
@media(max-width: 768px){
margin-left: 20px;
margin-top: -65px;
} */
