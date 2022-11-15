import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { ClassRoom } from 'types/classroom';
import { Medium } from 'types/medium';
import { Module } from 'types/module';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  classesId: string;
};

const Form = () => {
  const { classesId } = useParams<UrlParams>();
  const isEditing = classesId !== 'create';
  const history = useHistory();

  const [selectModules, setSelectModules] = useState<Module[]>([]);
  const [selectMediuns, setSelectMediuns] = useState<Medium[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<ClassRoom>();

  useEffect(() => {
    requestBackend({ url: '/modules' }).then(
      (response) => {
        setSelectModules(response.data.content);
      }
    );
  }, []);

  useEffect(() => {
    requestBackend({ url: '/mediuns', withCredentials: true }).then(
      (response) => {
        setSelectMediuns(response.data.content);
      }
    );
  }, []);

  useEffect(() => {
    console.log(classesId);
    if (isEditing) {
      requestBackend({ url: `/classes/${classesId}` }).then((response) => {
        const classRoom = response.data as ClassRoom;
        setValue('title', classRoom.title);
        setValue('url', classRoom.url);
        setValue('date', classRoom.date);
        setValue('medium', classRoom.medium);
        setValue('module', classRoom.module);
      });
    }
  }, [isEditing, classesId, setValue]);
  const onSubmit = (formData: ClassRoom) => {
    
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/classes/${classesId}` : '/classes',
      baseURL: BASE_URL,
      data: formData,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/classes');
    });
  };

  const handleCancel = () => {
    history.push('/admin/classes');
  };

  return (
    <div className="class-crud-content">
      <div className="base-card class-crud-form-card">
        <h1 className="class-crud-form-title">DADOS DA AULA</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row class-crud-inputs-container">
            <div className="margin-botton-30">
              <input
                {...register('title', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.title ? 'is-invalid' : ''
                }`}
                placeholder="Título"
                name="title"
              />
              <div className="invalid-feedback d-block">
                {errors.title?.message}
              </div>
            </div>
            <div>
              <input
                {...register('url', { required: 'Campo obrigatório' })}
                type="text"
                className={`form-control base-input ${
                  errors.title ? 'is-invalid' : ''
                }`}
                placeholder="Vídeo"
                name="url"
              />
              <div className="invalid-feedback d-block">
                {errors.url?.message}
              </div>
            </div>
          </div>
          <div className="row class-crud-inputs-container">
            <div className="col-lg-6 class-crud-inputs-left-container">
              <div className="margin-botton-30">
                <input
                  {...register('date', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.date ? 'is-invalid' : ''
                  }`}
                  placeholder="Data"
                  name="date"
                />
                <div className="invalid-feedback d-block">
                  {errors.date?.message}
                </div>
              </div>
              <div className="margin-botton-30">
                <Controller
                  name="module"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectModules}
                      classNamePrefix="class-crud-select"
                      getOptionLabel={(module: Module) => module.name}
                      getOptionValue={(module: Module) => String(module.id)}
                    />
                  )}
                />
                {errors.module && (
                  <div className="invalid-feedback d-block">
                    Campo obrigatório
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="margin-botton-30">
                <Controller
                  name="medium"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectMediuns}
                      classNamePrefix="class-crud-select"
                      getOptionLabel={(medium: Medium) => medium.fullName}
                      getOptionValue={(medium: Medium) => String(medium.id)}
                    />
                  )}
                />
                {errors.medium && (
                  <div className="invalid-feedback d-block">
                    Campo obrigatório
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="xpto-agora-vai">
            <button
              className="btn btn-outline-danger xpto-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary xpto-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
