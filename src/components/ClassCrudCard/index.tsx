import { ClassRoom } from 'types/classroom';
import './styles.css';

type Props = {
    classRoom: ClassRoom;
}

const ClassCrudCard = ({ classRoom } : Props) => {

    return (
        <div className="base-card class-card">
            <div className="class-top-container">
                <p>{classRoom.title}</p>
            </div>
            <div className="class-container">
                <p>{classRoom.date}</p>
                <span>{classRoom.module.name}</span>
            </div>
        </div>
    );
}

export default ClassCrudCard;