import { ClassRoom } from 'types/classroom';
import './styles.css';

type Props = {
  classRoom: ClassRoom;
  url: string;
};

const ClassCard = ({ classRoom, url }: Props) => {
  return (
    <div className="base-card ">
      <div className="ratio ratio-4x3 classcard-videooo-container"> 
        <img src={url} alt="" />
      </div>
      <div className="classcard-container">
        <div className="classcard-top-container">
          {classRoom.title}
        </div>
        <div className="classcard-body-container">
          {classRoom.date} - {classRoom.module.name}
          
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
