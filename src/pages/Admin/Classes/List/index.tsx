import axios, { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import ClassCrudCard from 'pages/Admin/Classes/ClassCrudCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClassRoom } from 'types/classroom';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<ClassRoom>>();

  useEffect(() => {
    getClasses(0);
  }, []);

  const getClasses = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/classes',
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
    <div className="class-crud-content">
      <div className="class-crud-bar-container">
        <Link to="/admin/classes/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card class-filter-container">Search Bar</div>
      </div>
      <div className="row">
        {page?.content.map((aula) => (
          <div className="col-sm-6 col-md-12" key={aula.id}>
            <ClassCrudCard classRoom={aula} onDelete={() => getClasses(page.number)} />
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination pageCount={page ? page.totalPages : 0} range={3} onChange={getClasses} />
      </div>
    </div>
  );
};

export default List;
