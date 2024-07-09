import { ClassRoom } from 'types/classroom';
import './styles.css';

type Props = {
  classRoom: ClassRoom;
  url: string;
};

const ClassCard = ({ classRoom, url }: Props) => {
  return (
    <div className="base-card ">
      <div className="ratio ratio-16x9 class-videooo-container">
        <img src={url} alt="" />
      </div>
      <div>
        <div className="class-top-container">
          <p>{classRoom.title}</p>
        </div>
        <div className="class-container">
          <p>{classRoom.date}</p>
          <span>{classRoom.module.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
