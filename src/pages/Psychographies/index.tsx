import axios, { AxiosRequestConfig } from 'axios';
import CardLoader from 'components/CardLoader';
import Pagination from 'components/Pagination';
import PsychographyCard from 'components/PsychographyCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Psychography } from 'types/psychography';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import './styles.css';

const Psychographies = () => {
  const [page, setPage] = useState<SpringPage<Psychography>>();
  const [isLoading, setIsLoading] = useState(false);

  const getPsychography = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/psychographies',
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
  };

  useEffect(() => {
    getPsychography(0);
  }, []);

  return (
    <div className="container my-4 psychography-container">
      <div className="row psychography-title-container">
        <h1>Psicografias</h1>
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
          onChange={getPsychography}
        />
      </div>
    </div>
  );
};

export default Psychographies;
