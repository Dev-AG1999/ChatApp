import { title } from 'process';
import React from 'react';
import {ButtonContainer,Button1,ButtonTitle} from "./Styles";
interface ButtonProps {
  title:string;
  onPress(): any;
  active?:any;

  
  
}

const  Button=(props:ButtonProps)=> {
  const {
    title,onPress,active,
  }=props;
  return (
<ButtonContainer >
    <Button1 onClick={onPress} active={active} >
      
    
        <ButtonTitle>{title}</ButtonTitle>
    </Button1>
    
    
    

 
</ButtonContainer>
  );
};

export default Button;
