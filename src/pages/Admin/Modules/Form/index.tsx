import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Module } from 'types/module';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  moduleId: string;
};

const Form = () => {
  const { moduleId } = useParams<UrlParams>();
  const isEditing = moduleId !== 'create';
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Module>();

  useEffect(() => {
    console.log(moduleId);
    if (isEditing) {
      requestBackend({
        url: `/modules/${moduleId}`,
      }).then((response) => {
        const module = response.data as Module;
        setValue('name', module.name);
      });
    }
  }, [isEditing, moduleId, setValue]);
  const onSubmit = (formData: Module) => {
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/modules/${moduleId}` : '/modules',
      baseURL: BASE_URL,
      data: formData,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/modules');
    });
  };

  const handleCancel = () => {
    history.push('/admin/modules');
  };

  return (
    <div className="module-crud-content">
      <div className="base-card module-crud-form-card">
        <h1 className="module-crud-form-title">Módulo</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row module-crud-inputs-container">
            <div className="margin-botton-30">
              <input
                {...register('name', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.name ? 'is-invalid' : ''
                }`}
                placeholder="Nome"
                name="name"
              />
              <div className="invalid-feedback d-block">
                {errors.name?.message}
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
