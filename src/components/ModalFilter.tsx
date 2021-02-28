import { useState } from 'react';
import styles from '../../styles/filter.module.css';



export function ModalFilter() {

  const [limitNumber, setLimitNumber] = useState(9)
  const [searchType, setSearchType] = useState('anime');

  function handleLimitChange(e) {
    setLimitNumber(e.target.value)
  }
  function handleSelectChange(e) {
    setSearchType(e.target.value);
  }

  function resetFilter(){
    setLimitNumber(9);
    setSearchType('anime');
  }

  return (
    <div className="modal fade" id="modalFilter">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style={{ color: 'white' }} onClick={resetFilter}>&times;</span>
            </button>
          </div>
          <div className="modal-body">

            <div className="form-group">
              <div className={styles.inputGroup}>
                <label className={styles.label}>Resultados por pesquisa:</label>
                <input type="number" className={styles.input + ' form-control'} value={limitNumber} onChange={handleLimitChange} />
              </div>
            </div>
            <div className="form-group">
              <label className={styles.label}> Pesquisando por </label>
              <select onChange={handleSelectChange} value={searchType} className={styles.input + ' form-control'}>
                <option value="anime" >Anime</option>
                <option value="manga" >Mangá</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-p mr-3" data-dismiss="modal">Salvar</button>
              <button className="btn btn-b" data-dismiss="modal" onClick={resetFilter}>Cancelar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}