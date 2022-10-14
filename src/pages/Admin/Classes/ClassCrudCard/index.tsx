import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { ClassRoom } from 'types/classroom';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  classRoom: ClassRoom;
  onDelete: Function;
};

const ClassCrudCard = ({ classRoom, onDelete }: Props) => {
  const handleDelete = (classesId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/classes/${classesId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card class-crud-card">
      <div>
        <div className="class-crud-top-container">
          <p>{classRoom.title}</p>
        </div>
        <div className="class-crud-container">
          <p>{classRoom.date}</p>
          <p>{classRoom.module.name}</p>
        </div>
      </div>

      <div className="class-crud-buttons-container">
        <button
          onClick={() => handleDelete(classRoom.id)}
          className="btn btn-outline-danger class-crud-card-button class-crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/classes/${classRoom.id}`}>
          <button className="btn btn-outline-secondary class-crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassCrudCard;
