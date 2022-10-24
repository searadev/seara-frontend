import axios, { AxiosRequestConfig } from 'axios';
import CardLoader from 'components/CardLoader';
import ClassCard from 'components/ClassCard';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClassRoom } from 'types/classroom';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import './styles.css';

const Class = () => {
  const [page, setPage] = useState<SpringPage<ClassRoom>>();
  const [isLoading, setIsLoading] = useState(false);

  const getClasses = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/classes',
      baseURL: BASE_URL,
      params: {
        page: pageNumber,
        size: 12,
      },
    };

    setIsLoading(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getClasses(0);
  }, []);

  return (
    <div className="container my-4 classroom-container">
      <div className="row classroom-title-container">
        <h1>Aulas</h1>
      </div>
      <div>
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((classroom) => {
            return (
              <div className="row" key={classroom.id}>
                <Link to={`/classroom/${classroom.id}`}>
                  <ClassCard classRoom={classroom} />
                </Link>
              </div>
            );
          })
        )}
      </div>
      <div className="row">
        <Pagination pageCount={page ? page.totalPages : 0} range={3} onChange={getClasses} />
      </div>
    </div>
  );
};

export default Class;
