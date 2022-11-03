import { Lecture } from 'types/lecture';
import './styles.css';

type Props = {
  lecture: Lecture;
};

const LectureCard = ({ lecture }: Props) => {
  return (
    <div className="base-card lecture-card">
      <div className="ratio ratio-16x9 lecture-videooo-container">
        <iframe src={lecture?.url} title={lecture?.title}></iframe>
      </div>
      <div>
        <div className="lecture-top-container">
          <p>{lecture.title}</p>
        </div>
        <div className="lecture-body-container">
          <p>{lecture.date}</p>
        </div>
      </div>
    </div>
  );
};

export default LectureCard;
