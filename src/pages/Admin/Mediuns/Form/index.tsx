import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Medium } from 'types/medium';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  mediumId: string;
};

const Form = () => {
  const { mediumId } = useParams<UrlParams>();
  const isEditing = mediumId !== 'create';
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Medium>();

  useEffect(() => {
    console.log(mediumId);
    if (isEditing) {
      requestBackend({ url: `/mediuns/${mediumId}`, withCredentials: true }).then((response) => {
        const medium = response.data as Medium;
        setValue('fullName', medium.fullName);
      });
    }
  }, [isEditing, mediumId, setValue]);
  const onSubmit = (formData: Medium) => {
    const data = {
      ...formData,
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/mediuns/${mediumId}` : '/mediuns',
      baseURL: BASE_URL,
      data: data,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/mediuns');
    });
  };

  const handleCancel = () => {
    history.push('/admin/mediuns');
  };

  return (
    <div className="medium-crud-content">
      <div className="base-card medium-crud-form-card">
        <h1 className="medium-crud-form-title">Medium</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row medium-crud-inputs-container">
            <div className="margin-botton-30">
              <input
                {...register('fullName', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.fullName ? 'is-invalid' : ''
                }`}
                placeholder="Nome"
                name="fullName"
              />
              <div className="invalid-feedback d-block">
                {errors.fullName?.message}
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
