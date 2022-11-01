import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type LectureFilterData = {
  title: string;
};

type Props = {
  onSubmitFilter : (data: LectureFilterData) => void;
}

const LectureFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<LectureFilterData>();

  const onSubmit = (formData: LectureFilterData) => {
    onSubmitFilter(formData); 
  };

  const handleFormClear = () => {
    setValue('title', '');
  }   

  return (
    <div className="base-card lecture-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="lecture-filter-form">
        <div className="lecture-filter-name-container">
          <input
            {...register('title')}
            type="text"
            className="form-control"
            placeholder="Título"
            name="title"
          />
          <button className='lecture-filter-search-icon'>
            <SearchIcon />
          </button>
        </div>
        <div className="lecture-filter-bottom-container">
          
          <button onClick={handleFormClear} className="btn btn-outline-secondary btn-lecture-filter-clear">LIMPAR <span className='btn-lecture-filter-word'>FILTRO</span></button>
        </div>
      </form>
    </div>
  );
};

export default LectureFilter;
