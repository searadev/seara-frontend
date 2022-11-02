import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type LectureFilterDataAdm = {
  title: string;
};

type Props = {
  onSubmitFilter : (data: LectureFilterDataAdm) => void;
}

const LectureFilterAdm = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<LectureFilterDataAdm>();

  const onSubmit = (formData: LectureFilterDataAdm) => {
    onSubmitFilter(formData); 
  };

  const handleFormClear = () => {
    setValue('title', '');
  }   

  return (
    <div className="base-card lecture-filteradm">
      <form onSubmit={handleSubmit(onSubmit)} className='lecture-filteradm-form' >
        <div className='lecture-filteradm-name-container'>
          <input
            {...register('title')}
            type="text"
            className="form-control"
            placeholder="Título"
            name="title"
          />
          <button className='lecture-filteradm-search-icon'>
            <SearchIcon />
          </button>
        </div>
        <div className='lecture-filteradm-botton-container'>          
          <button onClick={handleFormClear} className="btn btn-outline-secondary btn-lecture2-clear">LIMPAR FILTRO</button>
        </div>
      </form>
    </div>
  );
};

export default LectureFilterAdm;
