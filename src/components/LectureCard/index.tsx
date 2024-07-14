import { Lecture } from 'types/lecture';
import './styles.css';

type Props = {
  lecture: Lecture;
  url: string;
};

const LectureCard = ({ lecture, url }: Props) => {
  return (
    <div className="base-card">
      <div className="ratio ratio-4x3 lecture-videooo-container"> 
        <img src={url} alt="" />
      </div>
      <div className="lecture-container">
        <div className="lecture-top-container">
          {lecture.title} - {lecture.date}
        </div>        
      </div>
    </div>
  );
};

export default LectureCard;
