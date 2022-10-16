import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Message } from 'types/message';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  message: Message;
  onDelete: Function;
};

const MessageCrudCard = ({ message, onDelete }: Props) => {
  const handleDelete = (messageId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/messages/${messageId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card message-crud-card">
      <div>
        <div className="message-crud-top-container">
          <p>{message.title}</p>
          <p>{message.fullName}</p>
        </div>
        <div className="message-crud-container">
          <p>{message.date}</p>
          <p>{message.medium.fullName}</p>
        </div>
      </div>

      <div className="message-crud-buttons-container">
        <button
          onClick={() => handleDelete(message.id)}
          className="btn btn-outline-danger message-crud-card-button message-crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/messages/${message.id}`}>
          <button className="btn btn-outline-secondary message-crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MessageCrudCard;
