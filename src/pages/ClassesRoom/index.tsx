import ClassCard from "components/ClassCard";
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
        <div className="container my-4 class">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard classRoom={classRoom} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard classRoom={classRoom} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard classRoom={classRoom} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard classRoom={classRoom} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard classRoom={classRoom} />
            </div>
          </div>          
        </div>  
    );
  };
  
  export default Class;