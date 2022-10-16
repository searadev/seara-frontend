import axios, { AxiosRequestConfig } from 'axios';
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
    getLectures();
  }, []);

  const getLectures = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/lectures',
      baseURL: BASE_URL,
      params: {
        page: 0,
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
            <LectureCrudCard lecture={palestras} onDelete={() => getLectures()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
