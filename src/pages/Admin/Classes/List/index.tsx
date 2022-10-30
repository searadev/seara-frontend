import axios, { AxiosRequestConfig } from 'axios';
import ClassFilter, { ClassFilterData } from 'components/ClassFilter';
import Pagination from 'components/Pagination';
import ClassCrudCard from 'pages/Admin/Classes/ClassCrudCard';
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

const List = () => {
  const [page, setPage] = useState<SpringPage<ClassRoom>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {title: ""},  
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };

  const handleSubmitFilter = (data: ClassFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  }

  const getClasses = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/classes',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 12,
        title: controlComponentsData.filterData.title
      },
    };

    axios(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getClasses();
  }, [getClasses]);

  return (
    <div className="class-crud-content">
      <div className="class-crud-bar-container">
        <Link to="/admin/classes/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <ClassFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map((aula) => (
          <div className="col-sm-6 col-md-12" key={aula.id}>
            <ClassCrudCard classRoom={aula} onDelete={getClasses} />
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination
          forcePage={page?.number}
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default List;
