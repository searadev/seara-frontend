import axios, { AxiosRequestConfig } from 'axios';
import CardLoader from 'components/CardLoader';
import LectureCard from 'components/LectureCard';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Lecture } from 'types/lecture';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
};

const Lectures = () => {
  const [page, setPage] = useState<SpringPage<Lecture>>();
  const [isLoading, setIsLoading] = useState(false);
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  const getLecture = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/lectures',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
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
  }, [controlComponentsData]);

  useEffect(() => {
    getLecture();
  }, [getLecture]);

  return (
    <div className="container my-4 lecture-container">
      <div className="row lecture-title-container">
        <h1>Palestras</h1>
      </div>
      <div>
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((lecture) => {
            return (
              <div className="row" key={lecture.id}>
                <Link to={`/lecture/${lecture.id}`}>
                  <LectureCard lecture={lecture} />
                </Link>
              </div>
            );
          })
        )}
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

export default Lectures;
