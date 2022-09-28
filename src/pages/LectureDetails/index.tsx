import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link, useParams } from 'react-router-dom';
import { Lecture } from 'types/lecture';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'util/requests';
import CardLoader from 'components/CardLoader';

type UrlParams = {
  lectureId: string;
};

const LectureDetails = () => {
  const { lectureId } = useParams<UrlParams>();
  const [lecture, setLecture] = useState<Lecture>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/lectures/${lectureId}`)
      .then((response) => {
        setLecture(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [lectureId]);

  return (
    <div className="lecture-details-container">
      <div className="base-card lecture-details-card">
        <Link to="/lecture">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div>
          {isLoading ? (
            <CardLoader />
          ) : (
            <>
              <div className="ratio ratio-16x9 lecture-vide-container">
                <iframe src={lecture?.url} title={lecture?.title}></iframe>
              </div>
              <div>
                <div className="lecture-data-container">
                  <h1>{lecture?.date}</h1>
                  <h1>-</h1>
                  <h1>{lecture?.title}</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureDetails;
