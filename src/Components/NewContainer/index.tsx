import { text } from "stream/consumers";
import {
  MainContainer,
  FirstContainer,
  SecondContainer,
  FormContainer,
  FormLabel1,
  FormTitle,
  FormP,
  Image1,
  ButtonContainer,
} from "./Styles";
import puzzle from "../../assets/puzzle.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const NewContainer = () => {
  const [added, setadded] = useState(false);
  const [active, setactive] = useState(false);
  const [selection, setselection] = useState(0);
  const [color, setcolor] = useState("red");
  const history = useNavigate();
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const handleClick=()=>{
    alert(email)
    
    history('/Home')
console.log("you have entered all your credentials",{email},{password});
    
  }

 
  return (
    <>
    <MainContainer>
    <FirstContainer>
      <FormContainer>
      <FormTitle>PLEASE LOG IN</FormTitle>
          <FormLabel1  type='email' placeholder="Email"  onChange={(e)=>{setemail(e.target.value); }}/>
          <FormLabel1 type='password' placeholder="Password"  onChange={(e)=>{setpassword(e.target.value);
         }} />
          <ButtonContainer>
          <Button title="Log In" onPress={()=>handleClick() } 
           />
          
        
            
              
          </ButtonContainer>
          
      </FormContainer>
      </FirstContainer>
      <SecondContainer>
          <Image1 src={puzzle}/>
      </SecondContainer>
      </MainContainer>
      
    </>
  );
};

export default NewContainer;