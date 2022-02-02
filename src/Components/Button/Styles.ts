import styled from "styled-components";
interface IsSignUp {
  active?: boolean;
}

export const ButtonContainer = styled.div`
  width: 80%;
  max-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button1 = styled.button<IsSignUp>`
  width: 180px;
  height: 30px;

  border: 2px transparent red;
  border-radius: 8px;

  background-color: ${(props) => (props.active ? "#FB2BEB5" : "#FF6347")};
  left: 25px;
  position: relative;
`;

/*export const Button2=styled.button`
width:47%;
height:30px;

border: 2px solid ;
border-radius:8px;
background-color:transparent;
opacity:0.4;


`;*/
export const ButtonTitle = styled.span`
  color: black;

  font-weight: bold;
`;
