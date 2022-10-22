import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Module } from 'types/module';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';
import ModuleCrudCard from '../ModuleCrudCard';
import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<Module>>();

  useEffect(() => {
    getModules();
  }, []);

  const getModules = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/modules',
      baseURL: BASE_URL,
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  };

  return (
    <div className="module-crud-content">
      <div className="module-crud-bar-container">
        <Link to="/admin/medules/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card module-filter-container">Search Bar</div>
      </div>
      <div className="row">
        {page?.content.map((module) => (
          <div key={module.id}>
            <ModuleCrudCard module={module} onDelete={() => getModules()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
