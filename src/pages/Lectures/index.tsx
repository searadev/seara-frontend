import axios, { AxiosRequestConfig } from 'axios';
import CardLoader from 'components/CardLoader';
import LectureCard from 'components/LectureCard';
import LectureFilter, { LectureFilterData } from 'components/LectureFilter';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Lecture } from 'types/lecture';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: LectureFilterData;
};

const Lectures = () => {
  const [page, setPage] = useState<SpringPage<Lecture>>();
  const [isLoading, setIsLoading] = useState(false);
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {title: ""},
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };

  const handleSubmitFilter = (data: LectureFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  }

  const getLecture = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/lectures',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 12,
        title: controlComponentsData.filterData.title,
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
    <div className="container my-4">
      <div className="row lecture-title-container">
      <LectureFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((lecture) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={lecture.id}>                
                <Link to={`/lecture/${lecture.id}`}>
                  <LectureCard 
                    lecture={lecture} 
                    url={`http://img.youtube.com/vi/${lecture?.url}/0.jpg`}                    
                    />
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
