import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">          
        </section>        
        <div className="text-center p-4">          
        <a
              href="https://www.youtube.com/channel/UCIessbLUBPCA9106K18V43w"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} color="#eb3223" size="2x"  />
            </a>
            <a
              href="https://pt-br.facebook.com/searadejesus/"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} color="#4968ad" size="2x"  />
            </a>
        </div>
        <div className="text-center p-1">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://searadejesus.com.br/">
            Seara de Jesus
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
