import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'types/message';
import { BASE_URL } from 'util/requests';
import './styles.css';

const MessageDetails = () => {

    const [message, setMessage] = useState<Message>();

    useEffect(() => {
        axios.get(BASE_URL + "/messages/1")
        .then(response => {
            setMessage(response.data);
        });
    }, []);

    return (
        <div className="message-details-container">
            <div className="base-card message-details-card">
                <Link to="/message">
                <div className="goback-container">
                    <ArrowIcon />
                    <h2>VOLTAR</h2>
                </div>
                </Link>
                <div className="message-content-container">
                    <div className="message-text-container">
                        <h2>{message?.title}</h2>
                        <p>{message?.text}</p>
                    </div>
                    <div>
                        <div className="message-data-container">
                            <h1>{message?.date}</h1>
                            <h1>-</h1>
                            <h1>{message?.fullName}</h1>
                        </div>                    
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default MessageDetails;