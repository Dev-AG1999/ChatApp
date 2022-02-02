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

const NewContainer = () => {
  const [added, setadded] = useState(false);
  const [active, setactive] = useState(false);
  const [selection, setselection] = useState(0);
  const [color, setcolor] = useState("red");
  const history = useNavigate();

  return (
    <div>
      <span>2nd page</span>
      <Button title="go back" onPress={()=>history('/')} />
    </div>
  );
};

export default NewContainer;
