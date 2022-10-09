import ClassCrudCard from 'pages/Admin/Classes/ClassCrudCard';
import { Link } from 'react-router-dom';
import './styles.css';

const List = () => {
  const aula = {
    id: 1,
    title:
      '24ª Aula – Jesus; Anunciação, Nascimento, Família, Vida Dos 12 Aos 30',
    url: 'https://www.youtube.com/embed/pmXuNx0UptQ',
    date: '16/08/2022',
    module: {
      id: 1,
      name: 'Módulo 2',
    },
    medium: {
      id: 1,
      fullName: 'Ananda Silva',
    },
  };

  return (
    <div className='class-crud-content'>
      <div className="class-crud-bar-container">
        <Link to="/admin/classes/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card class-filter-container">Search Bar</div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-12">
          <ClassCrudCard classRoom={aula} />
        </div>
        <div className="col-sm-6 col-md-12">
          <ClassCrudCard classRoom={aula} />
        </div>
        <div className="col-sm-6 col-md-12">
          <ClassCrudCard classRoom={aula} />
        </div>
        <div className="col-sm-6 col-md-12">
          <ClassCrudCard classRoom={aula} />
        </div>
      </div>
    </div>
  );
};

export default List;
