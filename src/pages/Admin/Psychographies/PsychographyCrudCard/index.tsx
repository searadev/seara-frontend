import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Psychography } from 'types/psychography';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  psychography: Psychography;
  onDelete: Function;
  status: string;
};

const PsychographyCrudCard = ({ psychography, onDelete, status }: Props) => {
  const handleDelete = (psychographyId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/psychographies/${psychographyId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card psychography-crud-card">
      <div>
        <div className="psychography-crud-top-container">
          <p>{psychography.title}</p>
          <p>{psychography.fullName}</p>
        </div>
        <div className="psychography-crud-container">
          <p>{psychography.date}</p>
          <p>{psychography.medium.fullName}</p>
          <p>{status}</p>
        </div>
      </div>

      <div className="psychography-crud-buttons-container">
        <button
          onClick={() => handleDelete(psychography.id)}
          className="btn btn-outline-danger psychography-crud-card-button psychography-crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/psychographies/${psychography.id}`}>
          <button className="btn btn-outline-secondary psychography-crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PsychographyCrudCard;
