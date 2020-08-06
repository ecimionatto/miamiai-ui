import React from 'react';
import LexChat from "react-lex";
 
const Lex = () => {
  return (<LexChat botName="BHAI"
                 IdentityPoolId="us-east-1:3cae0463-6ee4-4455-8cf9-98c3998f835a"
                 placeholder="Placeholder text"
                 style={{position: 'absolute'}}
                 backgroundColor="#FFFFFF"
                 height="430px"
                 headerText="Chat with our awesome bot" />);
  
}
export default Lex;