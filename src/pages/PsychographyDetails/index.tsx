import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'util/requests';
import { Psychography } from 'types/psychography';
import CardLoader from 'components/CardLoader';

type UrlParams = {
    psychographyId: string;
  };

const PsychographyDetails = () => {
    const { psychographyId } = useParams<UrlParams>()
  const [psychography, setPsychography] = useState<Psychography>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/psychographies/${psychographyId}`)
      .then((response) => {
        setPsychography(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [psychographyId]);

  return (
    <div className="psychography-details-container">
      <div className="base-card psychography-details-card">
        <Link to="/psychography">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="psychography-content-container">
          {isLoading ? (
            <CardLoader />
          ) : (
            <>
              <div className="psychography-text-container">
                <p>{psychography?.text}</p>
              </div>
              <div>
                <div className="psychography-data-container">
                  <h1>{psychography?.date}</h1>
                  <h1>-</h1>
                  <h1>{psychography?.fullName}</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PsychographyDetails;
