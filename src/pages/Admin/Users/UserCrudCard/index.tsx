import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { User } from 'types/user';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  user: User;
  onDelete: Function;
};

const UserCrudCard = ({ user, onDelete }: Props) => {
  const handleDelete = (userId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/users/${userId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card user-crud-card">
      <div>
        <div className="user-crud-top-container">{user.firstName} {user.lastName}</div>
      </div>

      <div>
        <button
          onClick={() => handleDelete(user.id)}
          className="btn btn-outline-danger"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/users/${user.id}`}>
          <button className="btn btn-outline-secondary">EDITAR</button>
        </Link>
      </div>
    </div>
  );
};

export default UserCrudCard;
