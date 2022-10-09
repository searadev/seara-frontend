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
            <div className='class-crud-buttons-container'>
                <button className='btn btn-danger class-crud-card-button class-crud-card-button-first'>
                    EXCLUIR
                </button>
                <button className='btn btn-secondary class-crud-card-button'>
                    EDITAR
                </button>
            </div>
        </div>
    );
}

export default ClassCrudCard;