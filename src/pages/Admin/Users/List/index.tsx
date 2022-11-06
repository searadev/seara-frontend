import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types/user';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';
import UserCrudCard from '../UserCrudCard';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<User>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  const getusers = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/users',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 12,
      },
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getusers();
  }, [getusers]);

  return (
    <div className="user-crud-content">
      <div className="user-crud-bar-container">
        <Link to="/admin/users/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
      </div>
      <div className="row">
        {page?.content.map((user) => (
          <div key={user.id}>
            <UserCrudCard user={user} onDelete={getusers} />
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
