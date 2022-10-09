import './styles.css';

const Form = () => {
  return (
    <div className="class-crud-content">
      <div className="base-card class-crud-form-card">
        <h1 className="class-crud-form-title">DADOS DA AULA</h1>
        <form action="">
          <div className="row">
            <div className="col-lg-6">
              <input type="text" className='form-control base-input' />
              <input type="text" className='form-control base-input' />
              <input type="text" className='form-control base-input' />
            </div>
            <div className="col-lg-6">
              <textarea rows={10} className='form-control base-input'></textarea>
            </div>
          </div>
          <div>
            <button className='btn btn-outline-danger'>CANCELAR</button>
            <button className='btn btn-primary'>SALVAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
