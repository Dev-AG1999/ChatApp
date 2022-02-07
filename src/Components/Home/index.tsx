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
  ButtonContainer,Header
} from "./Styles";
import network from "../../assets/network.jpg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


const NewContainer = () => {
  const [added, setadded] = useState(false);
  const [active, setactive] = useState(false);
  const [selection, setselection] = useState(0);
  const [color, setcolor] = useState("red");
  const history = useNavigate();

  return (
    <>
    <MainContainer>
    <FirstContainer>
        <Header> WELCOME TO THE GLOBAL COMMUNITY</Header>
        <ButtonContainer>
          <Button title="Start Chat"  onPress={()=>history("/")} />
              
          </ButtonContainer>
      
      </FirstContainer>
      <SecondContainer>
          <Image1 src={network}/>
      </SecondContainer>
      </MainContainer>
      
    </>
  );
};

export default NewContainer;