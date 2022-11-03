import { Lecture } from 'types/lecture';
import './styles.css';

type Props = {
  lecture: Lecture;
  url: string;
};

const LectureCard = ({ lecture, url }: Props) => {
  return (
    <div className="base-card lecture-card">
      <div className="ratio ratio-16x9 lecture-videooo-container">
        <img src={url} alt="" />
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
