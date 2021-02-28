import { useContext, useState } from 'react';
import styles from '../../styles/filter.module.css';
import { FilterContext } from '../contexts/FilterContext';



export function ModalFilter() {

  const{limitNumber, searchType, handleLimitChange, handleSelectChange, resetFilter} = useContext(FilterContext);

  return (
    <div className="modal fade" id="modalFilter">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style={{ color: 'white' }} onClick={resetFilter}>&times;</span>
            </button>
          </div>
          <div className="modal-body row d-flex justify-content-center">

            <div className="form-group col-md-10">
              <div className={styles.inputGroup}>
                <label className={styles.label}>Resultados por pesquisa:</label>
                <input type="number" min="1" max="50" className={styles.input + ' form-control'} value={limitNumber} onChange={handleLimitChange} />
              </div>
            </div>
            <div className="form-group col-md-10">
              <label className={styles.label}> Pesquisando por </label>
              <select onChange={handleSelectChange} value={searchType} className={styles.input + ' form-control'}>
                <option value="anime" >Anime</option>
                <option value="manga" >Mangá</option>
              </select>
            </div>
            <div className="form-group col-md-10">
              <button className="btn btn-p mr-3" data-dismiss="modal">Salvar</button>
              <button className="btn btn-b" data-dismiss="modal" onClick={resetFilter}>Cancelar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}