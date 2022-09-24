import PsychographyCard from "components/PsychographyCard";
import './styles.css';

const Psychography = () => {
    return (
        <div className="container my-4 psychography">
          <div className="row">
            <PsychographyCard />
          </div>
          <div className="row">
            <PsychographyCard />
          </div>
          <div className="row">
            <PsychographyCard />
          </div>
          <div className="row">
            <PsychographyCard />
          </div>
          <div className="row">
            <PsychographyCard />
          </div>
        </div>  
    );
  };
  
  export default Psychography;