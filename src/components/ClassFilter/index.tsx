import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import './styles.css';

const ClassFilter = () => {
  return (
    <div className="base-card class-filter-container">
      <form action="" className="class-filter-form">
        <div className="class-filter-name-container">
          <input type="text" className="form-control" placeholder="Aula" />
          <SearchIcon />
        </div>
        <div className="class-filter-bottom-container">
          <div className="class-filter-module-container">
            <select name="" id="">
              <option value="">Livros</option>
            </select>
          </div>
          <button className="btn btn-outline-secondary">LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

export default ClassFilter;
