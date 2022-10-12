import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ClassRoom } from 'types/classroom';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

const Form = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClassRoom>();

  const onSubmit = (formData: ClassRoom) => {
    const data = { ...formData, module: { id: 1 }, medium: { id: 1 } };

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/classes',
      baseURL: BASE_URL,
      data: data,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      console.log(response.data);
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
                <input
                  {...register('medium', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.date ? 'is-invalid' : ''
                  }`}
                  placeholder="Médium"
                  name="medium"
                />
                <div className="invalid-feedback d-block">
                  {errors.date?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="margin-botton-30">
                <input
                  {...register('module', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.module ? 'is-invalid' : ''
                  }`}
                  placeholder="Módulo"
                  name="module"
                />
                <div className="invalid-feedback d-block">
                  {errors.module?.message}
                </div>
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
