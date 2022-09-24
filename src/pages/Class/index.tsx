import ClassCard from "components/ClassCard";
import './styles.css';

const Class = () => {
    return (
        <div className="container my-4 class">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ClassCard />
            </div>
          </div>          
        </div>  
    );
  };
  
  export default Class;