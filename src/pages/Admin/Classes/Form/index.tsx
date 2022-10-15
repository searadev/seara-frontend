import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { ClassRoom } from 'types/classroom';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  classesId: string;
};

const Form = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  const { classesId } = useParams<UrlParams>();
  const isEditing = classesId !== 'create';
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ClassRoom>();
  useEffect(() => {
    console.log(classesId);
    if (isEditing) {
      requestBackend({ url: `/classes/${classesId}` }).then((response) => {
        const classRoom = response.data as ClassRoom;
        setValue('title', classRoom.title);
        setValue('url', classRoom.url);
        setValue('date', classRoom.date);
        setValue('medium.id', classRoom.medium.id);
        setValue('module.id', classRoom.module.id);
      });
    }
  }, [isEditing, classesId, setValue]);
  const onSubmit = (formData: ClassRoom) => {
    const data = {
      ...formData,
      module: isEditing ? formData.module : { id: 1 },
      medium: isEditing ? formData.medium : { id: 1 },
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/classes/${classesId}` : '/classes',
      baseURL: BASE_URL,
      data: data,
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
                <Select 
                  options={options}
                  classNamePrefix="class-crud-select"                
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="margin-botton-30">
              <Select 
                  options={options}
                  classNamePrefix="class-crud-select"                
                />
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
