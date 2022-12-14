import axios, { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import PsychographyFilterAdm, { PsychographyFilterDataAdm } from 'components/PsychographyFilterAdm';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Psychography } from 'types/psychography';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import PsychographyCrudCard from '../PsychographyCrudCard';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: PsychographyFilterDataAdm;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Psychography>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {text: "", fullName: ""},
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };

  const handleSubmitFilter = (data: PsychographyFilterDataAdm) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  }

  const getPsychographies = useCallback(() => { 
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/psychographies/all',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 12,
        fullName: controlComponentsData.filterData.fullName,
        text: controlComponentsData.filterData.text,
      },
    };

    axios(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getPsychographies();
  }, [getPsychographies]);

  return (
    <div className="psychography-crud-content">
      <div className="psychography-crud-bar-container">
        <Link to="/admin/psychographies/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <PsychographyFilterAdm onSubmitFilter={handleSubmitFilter} /> 
      </div>
      <div className="row">
        {page?.content.map((psicografias) => (
          <div key={psicografias.id}>
            <PsychographyCrudCard
              psychography={psicografias}
              onDelete={getPsychographies}
              status={psicografias.status === true ? 'Ativo' : 'Inativo'}
            />
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
