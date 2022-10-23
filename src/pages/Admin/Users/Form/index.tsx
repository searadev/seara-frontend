import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { User } from 'types/user';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  userId: string;
};

const Form = () => {
  const { userId } = useParams<UrlParams>();
  const isEditing = userId !== 'create';
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<User>();

  useEffect(() => {
    console.log(userId);
    if (isEditing) {
      requestBackend({ url: `/users/${userId}`, withCredentials: true }).then(
        (response) => {
          const user = response.data as User;
          setValue('firstName', user.firstName);
          setValue('lastName', user.lastName);
          setValue('email', user.email);
        }
      );
    }
  }, [isEditing, userId, setValue]);
  const onSubmit = (formData: User) => {
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/users/${userId}` : '/users',
      baseURL: BASE_URL,
      data: formData,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/users');
    });
  };

  const handleCancel = () => {
    history.push('/admin/users');
  };

  return (
    <div className="user-crud-content">
      <div className="base-card user-crud-form-card">
        <h1 className="user-crud-form-title">Usuário</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row user-crud-inputs-container">
            <div className="margin-botton-30">
              <input
                {...register('firstName', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.firstName ? 'is-invalid' : ''
                }`}
                placeholder="Nome"
                name="firstName"
              />
              <div className="invalid-feedback d-block">
                {errors.firstName?.message}
              </div>
              <input
                {...register('lastName', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.lastName ? 'is-invalid' : ''
                }`}
                placeholder="Sobrenome"
                name="lastName"
              />
              <div className="invalid-feedback d-block">
                {errors.lastName?.message}
              </div>
              <input
                {...register('email', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.email ? 'is-invalid' : ''
                }`}
                placeholder="Sobrenome"
                name="email"
              />
              <div className="invalid-feedback d-block">
                {errors.email?.message}
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
