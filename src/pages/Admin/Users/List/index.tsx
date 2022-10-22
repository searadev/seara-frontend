import { AxiosRequestConfig } from 'axios';
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
    getusers();
  }, []);

  const getusers = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/users',
      baseURL: BASE_URL,
      params: {
        page: 0,
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
            <UserCrudCard user={user} onDelete={() => getusers()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
