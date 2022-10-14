import axios, { AxiosRequestConfig } from "axios";
import CardLoader from "components/CardLoader";
import ClassCard from "components/ClassCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClassRoom } from "types/classroom";
import { SpringPage } from "types/vendor/spring";
import { BASE_URL } from "util/requests";
import './styles.css';

const Class = () => {

    const [page, setPage] = useState<SpringPage<ClassRoom>>();
    const [isLoading, setIsLoading] = useState(false);
      
    useEffect(() => {

    const params : AxiosRequestConfig = {
      method: 'GET',
      url: "/classes",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12
      }
    };

    setIsLoading(true);
      axios(params)
        .then(response => {
          setPage(response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);

    return (
        <div className="container my-4 classroom-container">
          <div className="row classroom-title-container">
            <h1>Aulas</h1>
          </div>
          <div className="row">
          {isLoading ? <CardLoader /> :  (
            page?.content.map((classroom) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={classroom.id}>
                <Link to={`/classroom/${classroom.id}`}> 
                  <ClassCard classRoom={classroom}/>
                </Link>
              </div>
            );
          }))}          
          </div>       
          <div className="row">
            <Pagination />
          </div>   
        </div>  
    );
  };
  
  export default Class;