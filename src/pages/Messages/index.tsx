import MessageCard from "components/MessageCard";
import { Message } from "types/message";

import './styles.css';

const Messages = () => {

  const message : Message = {
    "id": 1,
    "title": "Apóie teu irmão",
    "fullName": "Bezerra de Menezes",
    "text": "Apóie teu irmão em crise, atingido pela doença ou pelo desemprego. Uma cesta básica doada, todo o mês, renovará o milagre da multiplicação de pães feito por Jesus.",
    "date": "18/08/2022",
    "medium": {
        "id": 1,
        "fullName": "Ananda Silva"
    },
    "status": true
}
    

    return (
        <div className="container my-4 message">
          <div className="row">
            <MessageCard message={message}/>
          </div>
          <div className="row">
            <MessageCard message={message}/>
          </div>
          <div className="row">
            <MessageCard message={message}/>
          </div>
          <div className="row">
            <MessageCard message={message}/>
          </div>
          <div className="row">
            <MessageCard message={message}/>
          </div>
        </div> 
    );
  };
  
  export default Messages;