import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types/user';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';
import UserCrudCard from '../UserCrudCard';
import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<User>>();

  useEffect(() => {
    getusers(0);
  }, []);

  const getusers = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/users',
      baseURL: BASE_URL,
      params: {
        page: pageNumber,
        size: 12,
      },
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  };

  return (
    <div className="user-crud-content">
      <div className="user-crud-bar-container">
        <Link to="/admin/medules/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card user-filter-container">Search Bar</div>
      </div>
      <div className="row">
        {page?.content.map((user) => (
          <div key={user.id}>
            <UserCrudCard user={user} onDelete={() => getusers(page.number)} />
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination pageCount={page ? page.totalPages : 0} range={3} onChange={getusers} />
      </div>
    </div>
  );
};

export default List;
