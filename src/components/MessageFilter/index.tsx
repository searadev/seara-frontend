import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type MessageFilterData = {
  text: string;
  fullName: string;
};

type Props = {
  onSubmitFilter : (data: MessageFilterData) => void;
}

const MessageFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit } = useForm<MessageFilterData>();

  const onSubmit = (formData: MessageFilterData) => {
    onSubmitFilter(formData); 
  }; 

  return (
    <div className="base-card message2-filter">
      <form onSubmit={handleSubmit(onSubmit)} className='message2-filter-form' >
        <div className='message2-filter-name-container'>
          <input
            {...register('text')}
            type="text"
            className="form-control"
            placeholder="Texto"
            name="text" 
          />                   
        </div>      
        <div className='message2-filter-fullName-container'>
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
      </form>
    </div>
  );
};

export default MessageFilter;
