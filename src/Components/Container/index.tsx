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
import chatimg2 from "../../assets/chatimg2.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

function Container() {
  const [added, setadded] = useState(false);
  const [active, setactive] = useState(false);
  const [selection, setselection] = useState(0);
  const [color, setcolor] = useState("red");

  const history = useNavigate();
  return (
    <MainContainer>
      <FirstContainer>
        <FormContainer>
          <FormTitle>Create Account</FormTitle>
          <FormP> or use your gmail for registration</FormP>
          <FormLabel1 type="text" placeholder="Name" />

          <FormLabel1 type="email" placeholder="Email" />

          <FormLabel1 type="password" placeholder="Password" />

          <ButtonContainer>
            <Button
              title="Sign In"
              onPress={() => {
                history("/signup");
              }}
            />
            <Button
              title="Sign Up"
              onPress={() => {
                alert("sign up clicked");
              }}
              active={true}
            />
          </ButtonContainer>
        </FormContainer>
      </FirstContainer>
      <SecondContainer>
        <Image1 src={chatimg2} />
      </SecondContainer>
    </MainContainer>
  );
}

export default Container;
