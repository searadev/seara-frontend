import LectureCard from "components/LectureCard";
import { Link } from "react-router-dom";
import { Lecture } from "types/lecture";
import './styles.css';

const Lectures = () => {

  const lecture : Lecture = {
    "id": 1,
    "title": "15_08_22 Rita Navarro",
    "url": "https://www.youtube.com/watch?v=nNeS4gUeSCw&t=64s",
    "date": "15/08/2022",
    "medium": {
        "id": 1,
        "fullName": "Ananda Silva"
    }
}

    return (
        <div className="container my-4 lecture-container">
          <div className="row lecture-title-container">
            <h1>Palestras</h1>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/lecture/1">
              <LectureCard lecture={lecture}/>
            </Link>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/lecture/1">
              <LectureCard lecture={lecture}/>
            </Link>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/lecture/1">
              <LectureCard lecture={lecture}/>
            </Link>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/lecture/1">
              <LectureCard lecture={lecture}/>
            </Link>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/lecture/1">
              <LectureCard lecture={lecture}/>
            </Link>
            </div>
          </div>          
        </div> 
    );
  };
  
  export default Lectures;