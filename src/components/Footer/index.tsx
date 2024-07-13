import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

const Footer = () => {
  return (
    <>
      <footer className="text-center bg-white ">
        <div className="text-center p-3">

        </div>
        <div className="text-center p-3">
          <a
            href="https://www.youtube.com/channel/UCIessbLUBPCA9106K18V43w"
            className="youtube social mx-2"
          >
            <FontAwesomeIcon icon={faYoutube} color="#eb3223" size="2x" />
          </a>
          <a
            href="https://pt-br.facebook.com/searadejesus/"
            className="facebook social mx-2"
          >
            <FontAwesomeIcon icon={faFacebook} color="#4968ad" size="2x" />
          </a>
        </div>
        <div className="text-center p-3">
          <div className="endereco-container">
            Rua Júpiter, 206 - jd. Novo Embu - Embu das Artes - SP
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
