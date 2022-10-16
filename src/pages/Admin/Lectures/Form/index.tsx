import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Lecture } from 'types/lecture';
import { Medium } from 'types/medium';
import { Module } from 'types/module';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  lecturesId: string;
};

const Form = () => {
  const { lecturesId } = useParams<UrlParams>();
  const isEditing = lecturesId !== 'create';
  const history = useHistory();
  
  const [selectMediuns, setSelectMediuns] = useState<Medium[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Lecture>();  

  useEffect(() => {
    requestBackend({ url: '/mediuns', withCredentials: true }).then(
      (response) => {
        setSelectMediuns(response.data.content);
      }
    );
  }, []);

  useEffect(() => {
    console.log(lecturesId);
    if (isEditing) {
      requestBackend({ url: `/lectures/${lecturesId}` }).then((response) => {
        const classRoom = response.data as Lecture;
        setValue('title', classRoom.title);
        setValue('url', classRoom.url);
        setValue('date', classRoom.date);
        setValue('medium', classRoom.medium);
      });
    }
  }, [isEditing, lecturesId, setValue]);
  const onSubmit = (formData: Lecture) => {
    const data = {
      ...formData,
      medium: isEditing ? formData.medium : { id: 1 },
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/lectures/${lecturesId}` : '/lectures',
      baseURL: BASE_URL,
      data: data,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/lectures');
    });
  };

  const handleCancel = () => {
    history.push('/admin/lectures');
  };

  return (
    <div className="lecture-crud-content">
      <div className="base-card lecture-crud-form-card">
        <h1 className="lecture-crud-form-title">DADOS DA PALESTRA</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row lecture-crud-inputs-container">
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
                {...register('url', {
                  required: 'Campo obrigatório',
                })}
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
          <div className="row lecture-crud-inputs-container">
            <div className="col-lg-6 lecture-crud-inputs-left-container">
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
                      classNamePrefix="lecture-crud-select"
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

