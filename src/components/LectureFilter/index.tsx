import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type LectureFilterData = {
  title: string;
};

type Props = {
  onSubmitFilter: (data: LectureFilterData) => void;
}

const LectureFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit } = useForm<LectureFilterData>();

  const onSubmit = (formData: LectureFilterData) => {
    onSubmitFilter(formData);
  };



  return (
    <div className="base-card lecture2-filter">
      <form onSubmit={handleSubmit(onSubmit)} className='lecture2-filter-form' >
        <div className='lecture2-filter-name-container'>
          <input
            {...register('title')}
            type="text"
            className="form-control"
            placeholder="Pesquisar por Título"
            name="title"
          />
          <button className='lecture2-filter-search-icon'>
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LectureFilter;
