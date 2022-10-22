import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'types/message';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import MessageCrudCard from '../MessageCrudCard';
import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<Message>>();

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/messages/all',
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(config).then((response) => {
      setPage(response.data);
    });
  };

  return (
    <div className="message-crud-content">
      <div className="message-crud-bar-container">
        <Link to="/admin/messages/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card message-filter-container">Search Bar</div>
      </div>
      <div className="row">
        {page?.content.map((mensagens) => (
          <div className="col-sm-6 col-md-12" key={mensagens.id}>
            <MessageCrudCard
              message={mensagens}
              onDelete={() => getMessages()}
              status={mensagens.status === true ? 'Ativo' : 'Inativo'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
