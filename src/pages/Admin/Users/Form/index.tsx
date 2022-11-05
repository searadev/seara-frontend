import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Role } from 'types/role';
import { User } from 'types/user';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  userId: string;
};

const Form = () => {
  const [selectRoles, setSelectRoles] = useState<Role[]>([]);

  const { userId } = useParams<UrlParams>();
  const isEditing = userId !== 'create';
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<User>();

  useEffect(() => {
    requestBackend({ url: '/roles', withCredentials: true }).then((respose) => {
      setSelectRoles(respose.data.content);
    });
  }, []);

  useEffect(() => {
    console.log(userId);
    if (isEditing) {
      requestBackend({ url: `/users/${userId}`, withCredentials: true }).then(
        (response) => {
          const user = response.data as User;
          setValue('firstName', user.firstName);
          setValue('lastName', user.lastName);
          setValue('email', user.email);
          setValue('roles', user.roles);
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
            <div className="user-crud-name-email">
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
                className={`form-control base-input user-crud-email-container ${
                  errors.email ? 'is-invalid' : ''
                }`}
                placeholder="Email"
                name="email"
              />
              <div className="invalid-feedback d-block">
                {errors.email?.message}
              </div>
              <Controller
                name="roles"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectRoles}
                    classNamePrefix="user-crud-select"
                    isMulti
                    getOptionLabel={(role: Role) => role.authority}
                    getOptionValue={(role: Role) => String(role.id)}
                  />
                )}
              />
              {errors.roles && (
                <div className="invalid-feedback d-block">
                  Campo obrigatório
                </div>
              )}
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
