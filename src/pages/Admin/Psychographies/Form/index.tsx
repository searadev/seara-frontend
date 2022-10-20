import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Medium } from 'types/medium';
import { Psychography } from 'types/psychography';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  psychographyId: string;
};

const Form = () => {
  const { psychographyId } = useParams<UrlParams>();
  const isEditing = psychographyId !== 'create';
  const history = useHistory();

  const [selectMediuns, setSelectMediuns] = useState<Medium[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Psychography>();

  useEffect(() => {
    requestBackend({ url: '/mediuns', withCredentials: true }).then(
      (response) => {
        setSelectMediuns(response.data.content);
      }
    );
  }, []);

  useEffect(() => {
    console.log(psychographyId);
    if (isEditing) {
      requestBackend({ url: `/psychographies/${psychographyId}` }).then(
        (response) => {
          const psychography = response.data as Psychography;
          setValue('title', psychography.title);
          setValue('text', psychography.text);
          setValue('date', psychography.date);
          setValue('fullName', psychography.fullName);
          setValue('medium', psychography.medium);
          setValue('status', psychography.status);
          setIsChecked(psychography.status);
        }
      );
    }
  }, [isEditing, psychographyId, setValue]);
  const onSubmit = (formData: Psychography) => {
    const data = {
      ...formData,
      medium: isEditing ? formData.medium : { id: 1 },
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/psychographies/${psychographyId}` : '/psychographies',
      baseURL: BASE_URL,
      data: data,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/psychographies');
    });
  };

  const handleCancel = () => {
    history.push('/admin/psychographies');
  };

  const handleOnChange = (bool: boolean) => {
    setIsChecked(bool);
  };

  return (
    <div className="psychography-crud-content">
      <div className="base-card psychography-crud-form-card">
        <h1 className="psychography-crud-form-title">DADOS DA PSICOGRAFIA</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row psychography-crud-inputs-container">
            <div className="col-lg-6 psychography-crud-inputs-left-container">
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
              <div className="margin-botton-30">
                <input
                  {...register('fullName', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.title ? 'is-invalid' : ''
                  }`}
                  placeholder="Nome"
                  name="fullName"
                />
                <div className="invalid-feedback d-block">
                  {errors.fullName?.message}
                </div>
              </div>
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
                  name="medium"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectMediuns}
                      classNamePrefix="psychography-crud-select"
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
              <div className="margin-botton-30">
                <input
                  {...register('status')}
                  type="checkbox"
                  name="status"
                  value="true"
                  className={'form-check-input'}
                  id="status"
                  checked={isChecked}
                  onChange={(e) => handleOnChange(e.target.checked)}
                />
                Ativo
                <div className="invalid-feedback d-block">
                  {errors.status?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="margin-botton-30">
                <textarea
                  rows={10}
                  {...register('text', {
                    required: 'Campo obrigatório',
                  })}
                  className={`form-control base-input h-auto ${
                    errors.text ? 'is-invalid' : ''
                  }`}
                  placeholder="Texto"
                  name="text"
                />
                <div className="invalid-feedback d-block">
                  {errors.text?.message}
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
