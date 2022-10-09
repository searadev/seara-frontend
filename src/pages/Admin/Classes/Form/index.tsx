import './styles.css';

const Form = () => {
  return (
    <div className="class-crud-content">
      <div className="base-card class-crud-form-card">
        <h1 className="class-crud-form-title">DADOS DA AULA</h1>
        <form action="">
          <div className="row class-crud-inputs-container">
            <div className="col-lg-6 class-crud-inputs-left-container">
              <div className="margin-botton-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="margin-botton-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div>
                <input type="text" className="form-control base-input" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <textarea
                  rows={10}
                  className="form-control base-input h-auto"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="xpto-agora-vai">
            <button className="btn btn-outline-danger xpto-button">
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
