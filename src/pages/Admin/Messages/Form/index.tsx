import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Medium } from 'types/medium';
import { Message } from 'types/message';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  messageId: string;
};

const Form = () => {
  const { messageId } = useParams<UrlParams>();
  const isEditing = messageId !== 'create';
  const history = useHistory();

  const [selectMediuns, setSelectMediuns] = useState<Medium[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Message>();

  useEffect(() => {
    requestBackend({ url: '/mediuns/all', withCredentials: true }).then(
      (response) => {
        setSelectMediuns(response.data.content);
      }
    );
  }, []);

  useEffect(() => {
    console.log(messageId);
    if (isEditing) {
      requestBackend({ url: `/messages/${messageId}` }).then((response) => {
        const message = response.data as Message;
        setValue('title', message.title);
        setValue('text', message.text);
        setValue('date', message.date);
        setValue('fullName', message.fullName);
        setValue('medium', message.medium);
        setIsChecked(message.status);
      });
    }
  }, [isEditing, messageId, setValue]);
  const onSubmit = (formData: Message) => {
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/messages/${messageId}` : '/messages',
      baseURL: BASE_URL,
      data: formData,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/messages');
    });
  };

  const handleCancel = () => {
    history.push('/admin/messages');
  };

  const handleOnChange = (bool: boolean) => {
    setIsChecked(bool);
  };

  return (
    <div className="message-crud-content">
      <div className="base-card message-crud-form-card">
        <h1 className="message-crud-form-title">DADOS DA MENSAGEM</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row message-crud-inputs-container">
            <div className="col-lg-6 message-crud-inputs-left-container">
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
                  type="date"                  
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
                      classNamePrefix="message-crud-select"
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
