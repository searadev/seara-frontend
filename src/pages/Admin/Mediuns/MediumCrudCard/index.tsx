import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Medium } from 'types/medium';
import { requestBackend } from 'util/requests';
import './styles.css'; 

type Props = {
  medium: Medium;
  onDelete: Function;
};

const MediumCrudCard = ({ medium, onDelete }: Props) => {
  const handleDelete = (mediumId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/mediuns/${mediumId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card medium-crud-card">
      <div>
        <div className="medium-crud-top-container">
          {medium.fullName}
        </div>
      </div>

      <div>
        <button
          onClick={() => handleDelete(medium.id)}
          className="btn btn-outline-danger medium-crud-excl !important"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/mediuns/${medium.id}`}>
          <button className="btn btn-outline-secondary">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MediumCrudCard;
