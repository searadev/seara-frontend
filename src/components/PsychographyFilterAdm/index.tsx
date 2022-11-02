import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type PsychographyFilterDataAdm = {
  text: string;
  fullName: string;
};

type Props = {
  onSubmitFilter : (data: PsychographyFilterDataAdm) => void;
}

const PsychographyFilterAdm = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<PsychographyFilterDataAdm>();

  const onSubmit = (formData: PsychographyFilterDataAdm) => {
    onSubmitFilter(formData); 
  };

  const handleFormClear = () => {
    setValue('text', '');
    setValue('fullName', '');
  }   

  return (
    <div className="base-card psychography-filteradm">
      <form onSubmit={handleSubmit(onSubmit)} className='psychography-filteradm-form' >
        <div className='psychography-filteradm-name-container'>
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
          <button className='psychography-filteradm-search-icon'>
            <SearchIcon />
          </button>
        </div>
        <div className='psychography-filteradm-botton-container'>          
          <button onClick={handleFormClear} className="btn btn-outline-secondary btn-psychography2-clear">LIMPAR FILTRO</button>
        </div>
      </form>
    </div>
  );
};

export default PsychographyFilterAdm;
