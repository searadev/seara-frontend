import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type MessageFilterData = {
  title: string;
  fullName: string;
};

type Props = {
  onSubmitFilter : (data: MessageFilterData) => void;
}

const MessageFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<MessageFilterData>();

  const onSubmit = (formData: MessageFilterData) => {
    onSubmitFilter(formData); 
  };

  const handleFormClear = () => {
    setValue('title', '');
    setValue('fullName', '');
  }   

  return (
    <div className="base-card message2-filter">
      <form onSubmit={handleSubmit(onSubmit)} className='message2-filter-form' >
        <div className='message2-filter-name-container'>
          <input
            {...register('title')}
            type="text"
            className="form-control"
            placeholder="Título"
            name="title" 
          /> 
          <input
            {...register('fullName')}
            type="text"
            className="form-control"
            placeholder="Nome"
            name="fullName"
          />
          <button className='message2-filter-search-icon'>
            <SearchIcon />
          </button>
        </div>
        <div className='message2-filter-botton-container'>          
          <button onClick={handleFormClear} className="btn btn-outline-secondary btn-message2-clear">LIMPAR FILTRO</button>
        </div>
      </form>
    </div>
  );
};

export default MessageFilter;
