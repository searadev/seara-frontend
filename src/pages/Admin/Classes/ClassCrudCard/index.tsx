import { ClassRoom } from 'types/classroom';
import './styles.css';

type Props = {
    classRoom: ClassRoom;
}

const ClassCrudCard = ({ classRoom } : Props) => {

    return (
        <div className="base-card class-crud-card">
            <div className="class-crud-top-container">
                <p>{classRoom.title}</p>
            </div>
            <div className="class-crud-container">
                <p>{classRoom.date}</p>                
                <p>{classRoom.module.name}</p>
            </div>
        </div>
    );
}

export default ClassCrudCard;