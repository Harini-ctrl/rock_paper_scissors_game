import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`
export const RulesView = styled.div`
  align-self: flex-end;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
export const TriggerButton = styled.button`
  width: 60px;
  height: 28px;
  padding: 10px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  outline: none;
`
export const CloseButton = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  font-size: 18px;
  border-style: none;
  outline: none;
  align-self: flex-end;
  margin-bottom: 5px;
  cursor: pointer;
`
