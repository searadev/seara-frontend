import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Module } from 'types/module';
import { requestBackend } from 'util/requests';
import './styles.css';

export type ClassFilterDataAdm = {
  title: string;
  module: Module | null;
};

type Props = {
  onSubmitFilter : (data: ClassFilterDataAdm) => void;
}

const ClassFilterAdm = ({ onSubmitFilter }: Props) => {
  const [selectModules, setSelectModules] = useState<Module[]>([]);
  const { register, handleSubmit, setValue, getValues, control } = useForm<ClassFilterDataAdm>();

  const onSubmit = (formData: ClassFilterDataAdm) => {
    onSubmitFilter(formData); 
  };

  const handleFormClear = () => {
    setValue('title', '');
    setValue('module', null);
  }

  const handleChangeModule = (value: Module) => {
    setValue('module', value);

    const obj : ClassFilterDataAdm = {
      title: getValues('title'),
      module: getValues('module')
    }
    onSubmitFilter(obj);
  }

  useEffect(() => {
    requestBackend({ url: '/modules' }).then(
      (response) => {
        setSelectModules(response.data.content);
      }
    );
  }, []);

  return (
    <div className="base-card class-filteradm-container">
      <form onSubmit={handleSubmit(onSubmit)} className="class-filter-form">
        <div className="class-filteradm-name-container">
          <input
            {...register('title')}
            type="text"
            className="form-control"
            placeholder="Título"
            name="title"
          />
          <button className='class-filteradm-search-icon'>
            <SearchIcon />
          </button>
        </div>
        <div className="class-filteradm-bottom-container">
          <div className="class-filteradm-module-container">
            <Controller
              name="module"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectModules}
                  isClearable
                  placeholder="Módulo"
                  classNamePrefix="class-filteradm-select"
                  onChange={value => handleChangeModule(value as Module)}
                  getOptionLabel={(module: Module) => module.name}
                  getOptionValue={(module: Module) => String(module.id)}
                />
              )}
            />
          </div>
          <button onClick={handleFormClear} className="btn btn-outline-secondary btn-class-filteradm-clear">LIMPAR <span className='btn-class-filteradm-word'>FILTRO</span></button>
        </div>
      </form>
    </div>
  );
};

export default ClassFilterAdm;
