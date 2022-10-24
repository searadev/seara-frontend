import axios, { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'types/message';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import MessageCrudCard from '../MessageCrudCard';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Message>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  const getMessages = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/messages/all',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 12,
      },
    };

    axios(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

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
              onDelete={getMessages}
              status={mensagens.status === true ? 'Ativo' : 'Inativo'}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default List;
