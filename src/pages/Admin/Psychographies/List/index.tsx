import axios, { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Psychography } from 'types/psychography';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import PsychographyCrudCard from '../PsychographyCrudCard';
import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<Psychography>>();

  useEffect(() => {
    getPsychographies(0);
  }, []);

  const getPsychographies = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/psychographies/all',
      baseURL: BASE_URL,
      params: {
        page: pageNumber,
        size: 12,
      },
    };

    axios(config).then((response) => {
      setPage(response.data);
    });
  };

  return (
    <div className="psychography-crud-content">
      <div className="psychography-crud-bar-container">
        <Link to="/admin/psychographies/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card psychography-filter-container">
          Search Bar
        </div>
      </div>
      <div className="row">
        {page?.content.map((psicografias) => (
          <div className="col-sm-6 col-md-12" key={psicografias.id}>
            <PsychographyCrudCard
              psychography={psicografias}
              onDelete={() => getPsychographies(page.number)}
              status={psicografias.status === true ? 'Ativo' : 'Inativo'}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination pageCount={page ? page.totalPages : 0} range={3} onChange={getPsychographies} />
      </div>
    </div>
  );
};

export default List;
