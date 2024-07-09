import axios, { AxiosRequestConfig } from 'axios';
import CardLoader from 'components/CardLoader';
import ClassCard from 'components/ClassCard';
import ClassFilter, { ClassFilterData } from 'components/ClassFilter';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClassRoom } from 'types/classroom';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: ClassFilterData;
};

const Class = () => {
  const [page, setPage] = useState<SpringPage<ClassRoom>>();
  const [isLoading, setIsLoading] = useState(false);
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {title: "", module: null},
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };

  const handleSubmitFilter = (data: ClassFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  }

  const getClasses = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/classes',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 12,
        title: controlComponentsData.filterData.title,
        module: controlComponentsData.filterData.module?.id
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
    getClasses();
  }, [getClasses]);

  return (
    <div className="container classroom-container">
      <div className="row classroom-title-container">
      <ClassFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((classroom) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3"  key={classroom.id}>
                <Link to={`/classroom/${classroom.id}`}>
                  <ClassCard 
                    classRoom={classroom} 
                    url={`http://img.youtube.com/vi/${classroom?.url}/0.jpg`} 
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

export default Class;
