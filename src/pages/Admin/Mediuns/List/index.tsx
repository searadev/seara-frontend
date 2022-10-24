import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Medium } from 'types/medium';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';
import MediumCrudCard from '../MediumCrudCard';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Medium>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  const getMediuns = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/mediuns',
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
    getMediuns();
  }, [getMediuns]);

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
            <MediumCrudCard medium={mediuns} onDelete={getMediuns} />
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
