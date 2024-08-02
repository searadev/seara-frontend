import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import axios from 'axios';
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


  useEffect(() => {
    axios
      .get(`${BASE_URL}/messages/${messageId}`)
      .then((response) => {
        setMessage(response.data);
      })
      .finally(() => {
      });
  }, [messageId]);

  return (
    <div className="message-details-container">
      <Link to="/message">
        <div className="goback-container">
          <ArrowIcon />
          <h2>VOLTAR</h2>
        </div>
      </Link>
      <div className="h-auto">
        <form>
          <div>
            <textarea
              rows={40}
              value={message?.text}
              className="form-control message-details-card h-auto"
              name="text"
              readOnly={true}              
            />
          </div>
          <div>
                <div className="message-data-container">
                  <h1>{message?.fullName}  -  {message?.date}</h1>
                </div>
              </div>
        </form>
      </div>
    </div>
  );
};
export default MessageDetails;
