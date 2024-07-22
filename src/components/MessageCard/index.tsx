import { Message } from 'types/message';
import './styles.css';

type Props = {
    message: Message;
}

const MessageCard = ({ message } : Props) => {

    return (
        <div className="base-card2 message-card"> 
            <div className="message-top-container">
                <p>{message.title}</p>
            </div>            
            <div className="message-botton-container">
                <h1>{message.fullName} - {message.date}</h1>
            </div>
        </div>
    );
}

export default MessageCard;