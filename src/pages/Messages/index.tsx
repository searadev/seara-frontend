import { AxiosRequestConfig } from 'axios';
import CardLoader from 'components/CardLoader';
import MessageCard from 'components/MessageCard';
import MessageFilter, { MessageFilterData } from 'components/MessageFilter';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'types/message';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MessageFilterData;
};

const Messages = () => {
  const [page, setPage] = useState<SpringPage<Message>>();
  const [isLoading, setIsLoading] = useState(false);
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { title: '', fullName: '' },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MessageFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMessage = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/messages',
      params: {
        page: controlComponentsData.activePage,
        size: 12,
        text: controlComponentsData.filterData.fullName,
        title: controlComponentsData.filterData.title,
      },
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [controlComponentsData]);

  useEffect(() => {
    getMessage();
  }, [getMessage]);

  return (
    <div className="container message-container">
      <div className="row message-src-container">
        <MessageFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      {isLoading ? (
        <CardLoader />
      ) : (
        page?.content.map((message) => {
          return (
            <div className="row" key={message.id}>
              <Link to={`/message/${message.id}`}>
                <MessageCard message={message} />
              </Link>
            </div>
          );
        })
      )}
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

export default Messages;
