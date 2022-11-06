import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Module } from 'types/module';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  module: Module;
  onDelete: Function;
};

const ModuleCrudCard = ({ module, onDelete }: Props) => {
  const handleDelete = (moduleId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/modules/${moduleId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card module-crud-card">
      <div>
        <div className="module-crud-top-container">
          {module.name}
        </div>
      </div>

      <div>
        <button
          onClick={() => handleDelete(module.id)}
          className="btn btn-outline-danger module-crud-excl !important"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/modules/${module.id}`}>
          <button className="btn btn-outline-secondary">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModuleCrudCard;
