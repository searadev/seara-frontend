import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type PsychographyFilterData = {
  text: string;
  fullName: string;
};

type Props = {
  onSubmitFilter : (data: PsychographyFilterData) => void;
}

const PsychographyFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit } = useForm<PsychographyFilterData>();

  const onSubmit = (formData: PsychographyFilterData) => {
    onSubmitFilter(formData); 
  };

  return (
    <div className="base-card psychography2-filter">
      <form onSubmit={handleSubmit(onSubmit)} className='psychography2-filter-form' >
        <div className='psychography2-filter-name-container'>
          <input
            {...register('text')}
            type="text"
            className="form-control"
            placeholder="Texto"
            name="text" 
          /> 
          <input
            {...register('fullName')}
            type="text"
            className="form-control"
            placeholder="Nome"
            name="fullName"
          />
          <button className='psychography2-filter-search-icon'>
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PsychographyFilter;
