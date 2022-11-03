import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link, useParams } from 'react-router-dom';
import { ClassRoom } from 'types/classroom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'util/requests';
import CardLoader from 'components/CardLoader';

type UrlParams = {
  classroomId: string;
};

const ClassRoomDetails = () => {
  const { classroomId } = useParams<UrlParams>();
  const [classroom, setClassroom] = useState<ClassRoom>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(classroomId);
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/classes/${classroomId}`)
      .then((response) => {
        setClassroom(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [classroomId]);

  return (
    <div className="classroom-details-container">
      <div className="base-card classroom-details-card">
        <Link to="/classroom">
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
              <div className="ratio ratio-16x9 classroom-vide-container">
              <iframe src={`https://www.youtube.com/embed/${classroom?.url}`} title={classroom?.title}></iframe>
              </div>
              <div className="classroom-data-container">
                <h1>{classroom?.date}</h1>
                <h1>-</h1>
                <h1>{classroom?.title}</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassRoomDetails;
