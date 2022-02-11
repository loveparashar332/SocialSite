import React,{Component} from "react";
import { ThemeProvider } from 'styled-components';
import ChatBot from "react-simple-chatbot";
import { Redirect} from 'react-router-dom'

import URLFiles from "./URLFiles.js"


let config = {
       width: "300px",
       height: "400px", 
       floating: true,
       opened: true,
       cache: false
     };

const theme = {
  background: '#f5f8f8',
  headerBgColor: 'black',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: 'black  ',
  botFontColor: '#fff',
  userBubbleColor: '#EA1E63',
  userFontColor: '#4a4a4a',
};
let seniorActivities = ["Health","Cultural Events","Recipes","Religion","Technology","Apply for Moderator"]
let adultActivities = ["Career options","Parenting","Societal Pressure","Home Decor"]
let teenActivities = ["Education","Peer pressure","Scholarships","Sports","Female Health","Self defense"]
let showActivities = [];

var choose = '';




class NariChatbot extends Component {
  componentWillMount(){
    let age = this.props.age;
    if(age < 21)
        showActivities = teenActivities;
    else if(age > 21 && age<40)
        showActivities = adultActivities;
    else
        showActivities = seniorActivities;
  }
   handleAbout = ()=>{
    const link = URLFiles[choose];
    console.log(link)
    this.props.history.push(link);
    return "Again"

}

render(){
    return <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Chat Bot Support"
        steps={[
          {
            id: "Greet",
            message: "Hello there! How can I help you today?",
            trigger: "CommonOptions"
          },
          {
            id: "CommonOptions",
            options: [
                    { value: 'Emergency', label: 'Safety', trigger: "LinkRouting" },
                    { value: "Workshops", label: 'Workshops', trigger: 'LinkRouting' }, 
                    { value: 3, label: 'What extra I can do', trigger: "MoreOptions" },
            ],
          },
          {
            id: "MoreOptions",
            message: "Here are some things that might interest you!",
            trigger: "DisplayOptions"
          },
          {
            id: "DisplayOptions",
            options: showActivities.map(e => {
            return { value: e, label: e, trigger: ({e}) => "LinkRouting" }
          })},
          {
            id: "LinkRouting",
            message: ({ previousValue})=> {choose = previousValue;
                return "You choose "+ previousValue +". Redirecting you to another screen now."},
            replace: true,
            trigger: this.handleAbout,
          },
          {
            id: "Again",
            message: "Is there anything else we can interest you in?",
            trigger: "CommonOptions"
          }
        ]} {...config}/></ThemeProvider>;
  }
}

export default NariChatbot;





