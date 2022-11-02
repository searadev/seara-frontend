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

const MessageFilterAdm = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<MessageFilterData>();

  const onSubmit = (formData: MessageFilterData) => {
    onSubmitFilter(formData); 
  };

  const handleFormClear = () => {
    setValue('title', '');
    setValue('fullName', '');
  }   

  return (
    <div className="base-card messageadm-filter">
      <form onSubmit={handleSubmit(onSubmit)} className='messageadm-filter-form' >
        <div className='messageadm-filter-name-container'>
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
          <button className='messageadm-filter-search-icon'>
            <SearchIcon />
          </button>
        </div>
        <div className='messageadm-filter-botton-container'>          
          <button onClick={handleFormClear} className="btn btn-outline-secondary btn-messageadm-clear">LIMPAR FILTRO</button>
        </div>
      </form>
    </div>
  );
};

export default MessageFilterAdm;
