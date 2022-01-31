import styled from "styled-components";

export const MainContainer=styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

background-color:white;



`;

export const FirstContainer=styled.div`
width:65%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-left:20px;


background-color:white;


`;
export const SecondContainer=styled.div`
width:35%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-left:0px;
padding:12px;
background-color:white;
`;
export const FormContainer=styled.div`
width:60%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-bottom:20px;

background-color:white;
`;
export const FormLabel1=styled.input`
width:80%;
height:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

background-color:lightgray;
margin-bottom:12px;
color:black;

border: 2px #9e9ea7 solid;
border-radius:8px;

::placeholder{
    color:black;
    
}

`;
/*export const FormLabel2=styled.input`
width:80%;
height:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

background-color:gray;
opacity:0.4;
margin-bottom:12px;

border: 2px #9e9ea7 solid;
border-radius:8px;
::placeholder{
    color:black;
}

`;
export const FormLabel3=styled.input`
width:80%;
height:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

background-color:gray;
margin-bottom:12px;

border: 2px #9e9ea7 solid;
border-radius:8px;
opacity:0.4;
::placeholder{
    color:black;
}



`;*/

export const FormTitle=styled.span`

color: red;
font-size:30px;
font-weight:bold;



`;
export const FormP=styled.p`

color: black;
font-size:12px;
font-weight:200px;
letter-spacing:1px;




`;
export const Image1=styled.img`

height:100%;
width:100%;

`;
export const ButtonContainer=styled.div`
width:80%;
max-height:30px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

`;