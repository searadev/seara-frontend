import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Medium } from 'types/medium';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';
import MediumCrudCard from '../MediumCrudCard';
import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<Medium>>();

  useEffect(() => {
    getMediuns();
  }, []);

  const getMediuns = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/mediuns',
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
    <div className="medium-crud-content">
      <div className="medium-crud-bar-container">
        <Link to="/admin/mediuns/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card medium-filter-container">Search Bar</div>
      </div>
      <div className="row">
        {page?.content.map((mediuns) => (
          <div key={mediuns.id}>
            <MediumCrudCard medium={mediuns} onDelete={() => getMediuns()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
