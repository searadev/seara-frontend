import { ClassRoom } from 'types/classroom';
import './styles.css';

type Props = {
  classRoom: ClassRoom;
};

const ClassCard = ({ classRoom }: Props) => {
  return (
    <div className="base-card class-card">
      <div className="ratio ratio-16x9 class-videooo-container">
        <iframe src={classRoom?.url} title={classRoom?.title}></iframe>
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
