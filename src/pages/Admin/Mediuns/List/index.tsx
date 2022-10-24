import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
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
    getMediuns(0);
  }, []);

  const getMediuns = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/mediuns',
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
            <MediumCrudCard medium={mediuns} onDelete={() => getMediuns(page.number)} />
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination pageCount={page ? page.totalPages : 0} range={3} onChange={getMediuns} />
      </div>
    </div>
  );
};

export default List;
