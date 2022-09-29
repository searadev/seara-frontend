import axios, { AxiosRequestConfig } from 'axios';
import CardLoader from 'components/CardLoader';
import MessageCard from 'components/MessageCard';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'types/message';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';

import './styles.css';

const Messages = () => {
  const [page, setPage] = useState<SpringPage<Message>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/messages",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12,
      },
    };

    setIsLoading(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container my-4 message-container">
      <div className="row message-title-container">
        <h1>Mensagens</h1>
      </div>
      {isLoading ? (
        <CardLoader />
      ) : (
        page?.content.map((message) => {
          return (
            <div className="row" key={message.id}>
              <Link to="/message/1">
                <MessageCard message={message} />
              </Link>
            </div>
          );
        })
      )}
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Messages;
