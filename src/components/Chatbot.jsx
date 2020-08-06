import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Chatbot extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./lex-web-ui-loader.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();

    this.div.appendChild(script);
  }
  scriptLoaded() {

    var config = {
        cognito: {
          // Your Cognito Pool Id - this is required to provide AWS credentials
          poolId: 'us-east-1:3cae0463-6ee4-4455-8cf9-98c3998f835a'
        },
        lex: {
          // Lex Bot Name in your account
          botName: 'BHAI'
        }
      };
      // load the LexWebUi component
      new ChatBotUiLoader.FullPageLoader(config).load();
  }
}
export default Chatbot;
