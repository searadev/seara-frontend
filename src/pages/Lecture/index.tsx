import Navbar from "components/Navbar";
import './styles.css';

const Lecture = () => {
    return (
      <>
        <Navbar />
        <div className="lecture-container">
          <div className="lecture-card">
            <div className="lecture-content-container">
              <h1>Palestras</h1>
            </div>
          </div>          
        </div>        
      </>
    );
  };
  
  export default Lecture;