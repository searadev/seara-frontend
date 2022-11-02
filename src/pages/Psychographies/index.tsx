import axios, { AxiosRequestConfig } from 'axios';
import CardLoader from 'components/CardLoader';
import Pagination from 'components/Pagination';
import PsychographyCard from 'components/PsychographyCard';
import PsychographyFilter, { PsychographyFilterData } from 'components/PsychographyFilter';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Psychography } from 'types/psychography';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: PsychographyFilterData;
};

const Psychographies = () => {
  const [page, setPage] = useState<SpringPage<Psychography>>();
  const [isLoading, setIsLoading] = useState(false);
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {text: "", fullName: ""},
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };

  const handleSubmitFilter = (data: PsychographyFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  }

  const getPsychography = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/psychographies',
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 12,
        fullName: controlComponentsData.filterData.fullName,
        text: controlComponentsData.filterData.text,
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
    getPsychography();
  }, [getPsychography]);

  return (
    <div className="container my-4 psychography-container">
      <div className="row psychography-title-container">
      <PsychographyFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      {isLoading ? (
        <CardLoader />
      ) : (
        page?.content.map((psychography) => {
          return (
            <div className="row" key={psychography.id}>
              <Link to={`/psychography/${psychography.id}`}>
                <PsychographyCard psychographyDto={psychography} />
              </Link>
            </div>
          );
        })
      )}
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

export default Psychographies;
