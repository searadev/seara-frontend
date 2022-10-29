import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Module } from 'types/module';
import { requestBackend } from 'util/requests';
import './styles.css';

type ClassFilterData = {
  title: string;
  module: Module;
};

const ClassFilter = () => {
  const [selectModules, setSelectModules] = useState<Module[]>([]);
  const {
    register,
    handleSubmit,
    control,
  } = useForm<ClassFilterData>();

  const onSubmit = (formData: ClassFilterData) => {
    console.log('ENVIOU', formData);
  };

  useEffect(() => {
    requestBackend({ url: '/modules', withCredentials: true }).then(
      (response) => {
        setSelectModules(response.data.content);
      }
    );
  }, []);

  return (
    <div className="base-card class-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="class-filter-form">
        <div className="class-filter-name-container">
          <input
            {...register('title')}
            type="text"
            className="form-control"
            placeholder="Título"
            name="title"
          />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className="class-filter-bottom-container">
          <div className="class-filter-module-container">
            <Controller
              name="module"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectModules}
                  isClearable
                  classNamePrefix="class-crud-select"
                  getOptionLabel={(module: Module) => module.name}
                  getOptionValue={(module: Module) => String(module.id)}
                />
              )}
            />
          </div>
          <button className="btn btn-outline-secondary">LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

export default ClassFilter;
