import ClassCard from "components/ClassCard";
import Pagination from "components/Pagination";
import { Link } from "react-router-dom";
import { ClassRoom } from "types/classroom";
import './styles.css';

const Class = () => {

    const classRoom : ClassRoom = {
      "id": 1,
      "title": "24ª Aula – Jesus; Anunciação, Nascimento, Família, Vida Dos 12 Aos 30",
      "url": "https://www.youtube.com/watch?v=pmXuNx0UptQ",
      "date": "16/08/2022",
      "module": {
          "id": 1,
          "name": "Módulo 2"
      },
      "medium": {
          "id": 1,
          "fullName": "Ananda Silva"
      }
  }

    return (
        <div className="container my-4 classroom-container">
          <div className="row classroom-title-container">
            <h1>Aulas</h1>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/classroom/1">
              <ClassCard classRoom={classRoom} />
            </Link>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/classroom/1">
              <ClassCard classRoom={classRoom} />
            </Link>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/classroom/1">
              <ClassCard classRoom={classRoom} />
            </Link>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/classroom/1">
              <ClassCard classRoom={classRoom} />
            </Link>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/classroom/1">
              <ClassCard classRoom={classRoom} />
            </Link>
            </div>            
          </div>       
          <div className="row">
            <Pagination />
          </div>   
        </div>  
    );
  };
  
  export default Class;