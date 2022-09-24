import LectureCard from "components/LectureCard";
import './styles.css';

const Lecture = () => {
    return (
        <div className="container my-4 lecture">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <LectureCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <LectureCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <LectureCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <LectureCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <LectureCard />
            </div>
          </div>          
        </div> 
    );
  };
  
  export default Lecture;