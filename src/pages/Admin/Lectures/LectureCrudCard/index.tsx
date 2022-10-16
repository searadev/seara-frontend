import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Lecture } from 'types/lecture';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  lecture: Lecture;
  onDelete: Function;
};

const LectureCrudCard = ({ lecture, onDelete }: Props) => {
  const handleDelete = (lectureId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/lectures/${lectureId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card lecture-crud-card">
      <div>
        <div className="lecture-crud-top-container">
          <p>{lecture.title}</p>
        </div>
        <div className="lecture-crud-container">
          <p>{lecture.date}</p>
        </div>
      </div>

      <div className="lecture-crud-buttons-container">
        <button
          onClick={() => handleDelete(lecture.id)}
          className="btn btn-outline-danger lecture-crud-card-button lecture-crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/lectures/${lecture.id}`}>
          <button className="btn btn-outline-secondary lecture-crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LectureCrudCard;
