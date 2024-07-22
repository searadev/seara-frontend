import './styles.css';

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import axios from 'axios';
import CardLoader from 'components/CardLoader';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Message } from 'types/message';
import { BASE_URL } from 'util/requests';


type UrlParams = {
  messageId: string;
};

const MessageDetails = () => {
  const { messageId } = useParams<UrlParams>();
  const [message, setMessage] = useState<Message>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/messages/${messageId}`)
      .then((response) => {
        setMessage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [messageId]);

  return (
    <div className="message-details-container">
      <div className="message-details-card">
        <Link to="/message">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="message-content-container">
          {isLoading ? (
            <CardLoader />
          ) : (
            <>
              <div className="message-text-container">
                <p>{message?.text}</p>
              </div>
              <div>
                <div className="message-data-container">
                  <h1>{message?.fullName}  -  {message?.date}</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;
