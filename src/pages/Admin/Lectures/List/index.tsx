import axios, { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Lecture } from 'types/lecture';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import LectureCrudCard from '../LectureCrudCard';
import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<Lecture>>();

  useEffect(() => {
    getLectures(0);
  }, []);

  const getLectures = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/lectures',
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
    <div className="lecture-crud-content">
      <div className="lecture-crud-bar-container">
        <Link to="/admin/lectures/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card lecture-filter-container">Search Bar</div>
      </div>
      <div className="row">
        {page?.content.map((palestras) => (
          <div className="col-sm-6 col-md-12" key={palestras.id}>
            <LectureCrudCard
              lecture={palestras}
              onDelete={() => getLectures(page.number)}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination pageCount={page ? page.totalPages : 0} range={3} onChange={getLectures} />
      </div>
    </div>
  );
};

export default List;
