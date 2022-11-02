import axios, { AxiosRequestConfig } from 'axios';
import LectureFilterAdm, { LectureFilterDataAdm } from 'components/LectureFilterAdm';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Lecture } from 'types/lecture';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import LectureCrudCard from '../LectureCrudCard';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: LectureFilterDataAdm;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Lecture>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {title: ""},
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };

  const handleSubmitFilter = (data: LectureFilterDataAdm) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  }

  const getLectures = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/lectures',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 12,
        title: controlComponentsData.filterData.title,
      },
    };

    axios(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getLectures();
  }, [getLectures]);

  return (
    <div className="lecture-crud-content">
      <div className="lecture-crud-bar-container">
        <Link to="/admin/lectures/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <LectureFilterAdm onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map((palestras) => (
          <div key={palestras.id}>
            <LectureCrudCard lecture={palestras} onDelete={getLectures} />
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
