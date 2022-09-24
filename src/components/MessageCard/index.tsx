import { Message } from 'types/message';
import './styles.css';

type Props = {
    message: Message;
}

const MessageCard = ({ message } : Props) => {

    return (
        <div className="base-card message-card">
            <div className="message-top-container">
                <p>{message.title}</p>
            </div>
            <div className="message-body-container">
                <p>{message.text}</p>
            </div>
            <div className="message-botton-container">
                <h1>{message.fullName}</h1>
            </div>
        </div>
    );
}

export default MessageCard;