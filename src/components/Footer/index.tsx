import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Redes Sociais:</span>
          </div>

          <div>
            <Link to="" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="text-uppercase fw-bold mb-4"></i>Seara de Jesus
                </h6>
                <p>Instituição espírita auxiliando a população.</p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Horário de funcionamento
                </h6>
                <p>
                  <i className="text-reset"></i> Quartas e Sábados
                </p>
                <p>
                  <i className="text-reset"></i> 19:00 às 21:00
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contato e Endereço
                </h6>
                <p>
                  <i className="text-reset"></i> rua 123456, 123
                </p>
                <p>
                  <i className="text-reset"></i>
                  São Paulo - SP
                </p>
                <p>
                  <i className="text-reset"></i> seara@gmail.com
                </p>
                <p>
                  <i className="text-reset"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
